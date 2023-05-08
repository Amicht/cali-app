import { ExerciseModel } from "./ExerciseModel";


export interface MusleGroupProgramDefs{
    exercise: ExerciseModel | null;
    time?: number;
    rep?: number;
}

export interface ProgramMuscleGroups{
    pull: MusleGroupProgramDefs;
    push: MusleGroupProgramDefs;
    squat: MusleGroupProgramDefs;
    core: MusleGroupProgramDefs;
}

export interface ProgramSetDefs{
    target:number;
    current: number; 
    break:{
        sets:number,
        exrcs: number
    }
}


export interface WorkoutModel{
    mslGrp:ProgramMuscleGroups;
}