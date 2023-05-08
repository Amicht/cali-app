import { WorkoutParamsModel } from "./WorkoutParams";

export interface WorkoutProgramI {
    push:  WorkoutParamsModel | null,
    pull: WorkoutParamsModel | null,
    core: WorkoutParamsModel | null,
    squat: WorkoutParamsModel | null
}