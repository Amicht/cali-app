import { WorkoutModel } from "../../models/workoutModel";

const WORKOUTKEY = "Workout-program";

const setProgramToStorage = (program:WorkoutModel) => localStorage.setItem(WORKOUTKEY, JSON.stringify(program));

const getProgramFromStorage = ():WorkoutModel | null => {
    const myWorkout = localStorage.getItem(WORKOUTKEY);
    if(myWorkout) return JSON.parse(myWorkout);
    else return null;
}



export {
    getProgramFromStorage,
    setProgramToStorage,
}