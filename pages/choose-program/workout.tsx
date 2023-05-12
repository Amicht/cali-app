import React from 'react'
import PageTitle from '@/components/titles/PageTitle';
import { LanguageCtst } from '@/services/context/LanguageService';
import { WorkourProgramCtxt } from '@/services/context/WorkoutProgramService';
import { useRouter } from 'next/router';
import { ExerciseModel } from '@/models/ExerciseModel';
import { workoutSettings } from '@/services/context/workoutSettings';
import { WorkoutModel } from '@/models/workoutModel';
import WorkoutSet from '@/components/workout-page/workout-set/WorkoutSet';
import WorkoutInfo from '@/components/workout-page/workoutInfo/WorkoutInfo';
import { PreWorkout } from '@/components/workout-page/pre-workout/PreWorkout';
import Head from 'next/head';


const WorkoutPage = () => {
    const {language} = React.useContext(LanguageCtst);
    const {funcs} = React.useContext(WorkourProgramCtxt);
    const router = useRouter();
    const [program, setProgram] = React.useState<ExerciseModel[]>([]);
    const [isWorkoutStarted, setIsWorkoutStarted] = React.useState(false);
    const [currentExrc,setCurrentExerc] = React.useState(0);
    const [isBreak,setIsBreak] = React.useState(false);
    const [isWorkoutCompleted,setIsWorkoutCompleted] = React.useState(false);
    const [currentSet,setCurrentSet] = React.useState(1);
    const headTitle = language.workout.title.map(s => s.txt).join(' ');


    const setNextPhase = () => {
        if(currentExrc === 3) setCurrentExerc(0);
        else setCurrentExerc(currentExrc + 1);
        setIsBreak(!isBreak);
    }

    const onSetEndHandler = () => {
        if(currentSet === workoutSettings.totalSets){
            setIsWorkoutCompleted(true);
            return;
        }
        else{
            setCurrentSet(currentSet + 1);
            setIsBreak(!isBreak);
            return;
        }
    }

    const onTimoutHandler = () => {

        if(!isWorkoutStarted){
            setIsWorkoutStarted(true);
            return;
        }

        if(isBreak){
            setNextPhase();
            return;
        }
        else if(currentExrc === program.length - 1){
            onSetEndHandler();
            return;
        }

        setIsBreak(!isBreak);
    }
    
    
    React.useEffect(() => {
        const userProgram:WorkoutModel | null = funcs!.getUserProgram();
        if(funcs?.checkIsProgramOK() && !!userProgram){
            setProgram(Object.values(userProgram.mslGrp).map(ex => ex.exercise));
        } 
        else router.push('/');
    },[]);

    if(router.isFallback) return router.push('/');
    
    
  return (
    <div 
        style={{direction:`${language.direction === 'rtl'? 'rtl': 'ltr'}`}}
        className='screen text-primary mt-5'>
        <Head>
            <title>{headTitle}</title>
        </Head>

        <PageTitle title={language.workout.title}
            direction={language.direction}/>
        
        {(program.length > 0)?
        <>

            {isWorkoutStarted?
            <>
                <WorkoutSet 
                    breakTime={workoutSettings.breakTime.btwnExrc}
                    currentExrc={currentExrc}
                    exerciseTime={workoutSettings.exerciseTime}
                    isBreak={isBreak}
                    isCompleted={isWorkoutCompleted}
                    onTimoutHandler={onTimoutHandler}
                    exrs={program}
                />
                <div className='col-md-6 mx-auto mt-5'>
                    <WorkoutInfo 
                        isBreak={isBreak}
                        isWorkoutCompleted={isWorkoutCompleted}
                        currentExercise={currentExrc +1}
                        currentSet={currentSet}
                        difficulty={program[currentExrc].difficulty}
                        language={language}
                    />
                </div>
            </>
            :<PreWorkout 
                title={language.workout.txts.start}
                content={""}
                firstExerciseName={program[0].name}
                startInCounter={workoutSettings.startInCounter} 
                onTimeoutHandler={onTimoutHandler}
            />}
        </> :null}
    </div>
  )
}

export default WorkoutPage