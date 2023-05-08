import React from 'react'
import {GiLeg, GiAbdominalArmor, GiChestArmor, GiBiceps } from 'react-icons/gi'
import {AiOutlineCheck} from 'react-icons/ai';
import { ProgramMuscleGroups } from '@/models/workoutModel';


interface Props{
  name: keyof ProgramMuscleGroups | string,
  muscles: string[], 
  isChosen: boolean,
  onMuscleClick:(muscle:string, mslGrpName:keyof ProgramMuscleGroups | string)=>void,
}


const MuscleGroupCard = (props:Props) => {

    const {name, muscles } = props;
    const icons = [
      {name: "squat", icon: <GiLeg />},
      {name: "core", icon: <GiAbdominalArmor />},
      {name: "push", icon: <GiChestArmor />},
      {name: "pull", icon: <GiBiceps />}
    ]

  return (
    <div className='muscle-group-card mx-2 my-2'>

        {props.isChosen&&<div className='checked-v mx-auto text-center'>
          <AiOutlineCheck className='icon' />
        </div>}
       
        <h3 >
          {name} 
        </h3>
        <div className='mb-3 muscle-group-icon'>
          {icons.filter((i) => i.name === name)
            .map((i) => <div key={i.name}>{i.icon}</div>)}
        </div>
        
        <ul>{muscles.map((msl, idx) => 
            <li 
              className='muscle-type text-start mx-5' 
              key={idx} 
              onClick={() => props.onMuscleClick(msl, name)}>
                {msl}
            </li>)}
          </ul>
    </div>
  )
}

export default MuscleGroupCard