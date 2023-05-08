import React from 'react'
import {ProgressBar} from 'react-bootstrap/esm/';
import { GoTriangleUp } from "react-icons/go";

interface Props{
    difficulty:string;
    difficultyTitle?:string;
    title?:string;
    size: string;
}

const DifficultyMeter = ({difficulty, difficultyTitle, title,size}:Props) => {

    const progressColors = [
        { now: 33, variant: "info"},
        { now: 33, variant: "warning"},
        { now: 34, variant: "danger"}
    ]

    function alignTxtByDifficultyLevel(difficulty:string){
        switch (difficulty){
            case "beginner": 
                return "text-start";
            case "intermediate": 
                return "text-center"
            case "expert": 
                return "text-end"
        }
    }

  return (
    <div >
        <h3 className='fw-bold fs-5 text-secondary mt-3'>{title}</h3>
        <div className={`${size} mx-auto`}>
            <ProgressBar>
                {progressColors.map((clr, idx) => 
                    <ProgressBar 
                        striped 
                        variant={clr.variant} 
                        now={clr.now} 
                        key={idx}/>
                )}
            </ProgressBar>

            <div className={alignTxtByDifficultyLevel(difficulty)+" px-3"}>
                <GoTriangleUp className='text-secondary'/>
                <div className='text-primary'>{difficultyTitle}</div>
            </div>
        </div>
    </div>
  )
}

export default DifficultyMeter