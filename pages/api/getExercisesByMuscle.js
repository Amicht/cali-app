import { getExercises } from "@/services/workoutApi/apiService";


export default async function getExercisesByMuscle(req, res){
    try{
      if(req.method != 'GET'){
        res.status(404).json({ message: 'path does not include this method' });
        return;
      }
      const muscle = req.query.muscle;
      if(!muscle) {
        res.status(400).json({ message: 'Muscle is missing' });
        return;
      }
      const exercises = await getExercises({muscle})
      res.status(200).json(exercises);
    }
    catch(err){
      res.status(404).json({ message: err.message || 'Failed to get exercises' });
    }
  }