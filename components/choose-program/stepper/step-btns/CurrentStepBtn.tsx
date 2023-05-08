import React from 'react'

const CurrentStepBtn = ({stepNumber}: {stepNumber:number}) => {
  return (
    <div className='step-number current-step'>
        <div className='mx-auto text-center'>
            <div className='mx-1'>
                {stepNumber}
            </div>
        </div>
    </div>
  )
}

export default CurrentStepBtn