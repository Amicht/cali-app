import { WorkoutModel } from "../../models/workoutModel";


export const workoutSettings = {
    startInCounter: 7,
    exerciseTime: 60,
    breakTime: {
        btwnExrc: 10,
        btwnSets: 40
    },
    totalSets: 4
}

export const initialProgramValue : WorkoutModel = {
    mslGrp:{
        push: {exercise: null},
        pull: {exercise: null},
        core: {exercise: null},
        squat: {exercise: null},
    }
}