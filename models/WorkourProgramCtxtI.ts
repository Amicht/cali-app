import { ApiQueryParamsI } from "./ApiQueryParamsI";
import { ExerciseModel } from "./ExerciseModel";
import { ProgramMuscleGroups, WorkoutModel } from "./workoutModel";


export interface WorkourProgramCtxtI{
    states?:{
        exercises: ExerciseModel[],
        userProgram:WorkoutModel,
        isLoading:boolean
    },
    funcs?:{
        updateUserExerciseToProgram: (
            msclGrpName: keyof ProgramMuscleGroups | string, 
            exerciseName: string) => Promise<void>,
        checkIsProgramOK: () => boolean,
        getMuscleExercises: (apiCallParams: ApiQueryParamsI) => Promise<void>,
        onProgramInit:() => void,
        getUserProgram: () => WorkoutModel | null,
        loadingHandler: (isLoading:boolean) => void;
    }
}