import React from 'react'
import ParagraphTitle from '../../choose-program/exercise-card/ParagraphTitle'
import Timer from '../timer/Timer'
import { ExerciseModel } from '@/models/ExerciseModel'
import { LanguageCtst } from '@/services/context/LanguageService'

interface Props{
    exrs: ExerciseModel[],
    onTimoutHandler: () => void,
    isBreak: boolean,
    breakTime: number,
    exerciseTime: number,
    isCompleted: boolean,
    currentExrc: number
}


const WorkoutSet: React.FC<Props> = ({exrs, isBreak, breakTime, 
    exerciseTime, isCompleted, currentExrc,onTimoutHandler }) => {

        const {language:{workout:{txts:{p_titles}}}} = React.useContext(LanguageCtst);
    
  return (
    <div>
        {isBreak?
        <Timer 
            key={"timer-1"}
            startTime={breakTime} 
            onTimoutHandler={onTimoutHandler}/>
        : <Timer 
            key={"timer-2"}
            startTime={exerciseTime} 
            onTimoutHandler={onTimoutHandler}/>
        }

        {!isCompleted?
        <ParagraphTitle 
            titleName={isBreak? 
                p_titles.break:
                p_titles.work}
            content={isBreak && currentExrc < exrs.length -1?
                exrs[currentExrc + 1].name:
                exrs[currentExrc].name}
         />:
         <ParagraphTitle 
            titleName={p_titles.completed.title}
            content={p_titles.completed.subtitle}
         />}
        
    </div>
  )
}

export default WorkoutSet