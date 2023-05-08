import React from 'react'


const StepNumberBtn = ({ stepNumber }: {stepNumber:number}) => {
  return (
    <div className='step-number'>
        <div className='mx-auto text-center'>
            <div>
                {stepNumber}
            </div>
        </div>
    </div>
  )
}

export default StepNumberBtn