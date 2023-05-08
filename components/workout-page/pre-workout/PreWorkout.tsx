import React from 'react'
import ParagraphTitle from '../../choose-program/exercise-card/ParagraphTitle';
import Timer from '../timer/Timer';

interface Props{
    title: string
    content: string,
    startInCounter: number;
    firstExerciseName:string;
    onTimeoutHandler: () => void;
}

export const PreWorkout: React.FC<Props> = ({
        title,
        content,
        startInCounter,
        firstExerciseName,
        onTimeoutHandler
    }) => {



  return (<>
    <ParagraphTitle content={content} titleName={title} />
    <Timer 
        key={'start-timer'}
        startTime={startInCounter}
        isBreak={true}
        onTimoutHandler={onTimeoutHandler} 
    />
    <h4>{firstExerciseName}</h4>
  </>
    
  )
}
