import React, { ReactNode } from 'react';
import {  WorkoutModel } from '../../models/workoutModel';
import { ExerciseModel } from '../../models/ExerciseModel';
import { getProgramFromStorage, setProgramToStorage  } from '../local-storage/workoutStorage';
import { ApiQueryParamsI } from '../../models/ApiQueryParamsI';
import { WorkourProgramCtxtI } from '../../models/WorkourProgramCtxtI';
import { initialProgramValue } from './workoutSettings';
import { useRouter } from 'next/router';


export const WorkourProgramCtxt = React.createContext<WorkourProgramCtxtI>({});


interface ExercisesCacheI{
    [k:string]: ExerciseModel[]
}

const exercisesCache:ExercisesCacheI = {};


const WorkourProgramService = (props:{children?:ReactNode}) => {

    const [userProgram,setUserProgram] = React.useState<WorkoutModel>(initialProgramValue);
    const [exercises,setExercises] = React.useState<ExerciseModel[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const router = useRouter();

    const updateUserExerciseToProgram = async (msclGrpName:string , exerciseName:string) => {
        let newExercise = exercises.find(ex => ex.name === exerciseName) || null;
        const updatedProgram = {...userProgram};
        
        // @ts-ignore: Unreachable code error
        if( !!updatedProgram.mslGrp[msclGrpName] ){
            // @ts-ignore: Unreachable code error
            updatedProgram.mslGrp[msclGrpName].exercise = newExercise;
            setUserProgram(updatedProgram);
            setProgramToStorage(updatedProgram);
        }
    }

    const getMuscleExercises = async(apiCallParams: ApiQueryParamsI) => {

        if(!!exercisesCache[apiCallParams.muscle]){
            setExercises(exercisesCache[apiCallParams.muscle])
        }
        else{
            const apiurl = `/api/getExercisesByMuscle?muscle=${apiCallParams.muscle}`
            await fetch(apiurl)
                .then(res => res.json())
                .then((res:ExerciseModel[]) => {
                    setExercises(res);
                    exercisesCache[apiCallParams.muscle] = res;
                })
                .catch(() => router.push('404'));
        }
    } 

    const onProgramInit = () => {
        const program = getProgramFromStorage();
        if(!!program){ setUserProgram(program) }
        else{ 
            setUserProgram(initialProgramValue);
            setProgramToStorage(userProgram); 
        }
    }

    const checkIsProgramOK = ():boolean => {
        const program:WorkoutModel | null = getProgramFromStorage();
        if(!!program){
            return (Object.values(program.mslGrp).filter(msclGrp => !msclGrp.exercise).length) === 0;
        }
        return false;
    }

    const loadingHandler = (isLoadingNow:boolean) => {
        setIsLoading(isLoadingNow);
    }

    const getUserProgram = () => {
        const program = getProgramFromStorage();
        if(!program) return null
        return program;
    }

    const states ={
        exercises,
        userProgram,
        isLoading
    }

    const funcs = {
        updateUserExerciseToProgram,
        checkIsProgramOK,
        getMuscleExercises,
        onProgramInit,
        getUserProgram,
        loadingHandler
    }


  return (
    <WorkourProgramCtxt.Provider value={{states, funcs}}>
        {props.children}
    </WorkourProgramCtxt.Provider>
  )
}

export default WorkourProgramService

