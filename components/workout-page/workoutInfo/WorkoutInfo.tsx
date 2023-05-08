import DifficultyMeter from '../../choose-program/exercise-card/DifficultyMeter';
import InfoTitleComponent from './InfoTitleComponent';
import { LanguageModel } from '@/models/LanguageModel';


interface Props{
    currentSet: number;
    currentExercise:number;
    difficulty: string;
    language: LanguageModel;
    isBreak:boolean;
    isWorkoutCompleted:boolean;
}


const WorkoutInfo = ({
    currentSet,
    currentExercise,
    difficulty,
    isWorkoutCompleted,
    language,
    isBreak}:Props) => {

  return (<>
    {!isBreak && !isWorkoutCompleted? 
    <div className='row workout-info'>
        
        <InfoTitleComponent 
            key="info-title-1"
            titleType={language.workout.txts.info.set}
            value={currentSet} />

        <div className='col'>
            <div style={{direction:'ltr'}}>
                <DifficultyMeter size="col" difficulty={difficulty} />
                <h4 className='difficulty-title'>
                    {language.workout.txts.info.difficulty}
                </h4>
            </div>
        </div>

        <InfoTitleComponent 
            key="info-title-3"
            titleType={language.workout.txts.info.exercise}
            value={currentExercise} />
    </div>
    :null}
    </>
  )
}

export default WorkoutInfo