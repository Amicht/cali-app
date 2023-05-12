import { getExercises } from "@/services/workoutApi/rapidApiService";


export default async function getExercisesByMuscle(req, res){
    try{
      const muscle = req.query.muscle;
      if(!muscle) {
        res.status(400).json({ message: 'Muscle is missing' });
      }
      const exercises = await getExercises({muscle})
      res.status(200).json(exercises);
    }
    catch(err){
      res.status(404).json({ message: err.message || 'Failed to get exercises' });
    }
  }