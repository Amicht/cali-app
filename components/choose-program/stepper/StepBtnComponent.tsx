import CurrentStepBtn from './step-btns/CurrentStepBtn';
import StepCheckedBtn from './step-btns/StepCheckedBtn';
import StepNumberBtn from './step-btns/StepNumberBtn';

interface Props{
    stepNumber: number
    stepName: string
    isFinished: boolean
    isCurrentStep: boolean
    onStepClick: () => void
}

const StepBtnComponent = (props:Props) => {

  const {stepName,stepNumber,isFinished,isCurrentStep, onStepClick} = props;
  
  return (
    <div 
      onClick={onStepClick}
      className='step-title col-2 d-flex'>
        {!isCurrentStep? 
            isFinished?
            <StepCheckedBtn />
            : <StepNumberBtn stepNumber={stepNumber}/> 

          : <CurrentStepBtn  stepNumber={stepNumber}/>
        }
        <div className='mx-2 step-name'>{stepName}</div>

        <hr className='col fs-2'/>
        
    </div>
  )
}

export default StepBtnComponent