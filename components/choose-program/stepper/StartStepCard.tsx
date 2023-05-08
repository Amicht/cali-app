import React from 'react'
import CostumBtn from '../../../components/costum-button/CostumBtn'
import { useRouter } from 'next/router'
import { LanguageCtst } from '@/services/context/LanguageService'
import { appRoutes } from '@/services/appRoutes'

interface Props{
    isStepsCompleted: boolean
    startBtnTxt: string
}

const StartStepCard = ({isStepsCompleted,startBtnTxt}: Props) => {
    const router = useRouter();
    
    const {language: {chooseProgramScreen,direction}} = React.useContext(LanguageCtst);
    const {unCompletedMessage, completedMessage} = chooseProgramScreen;


    const onNextBtnClick = () => {
        if(isStepsCompleted){ router.push(appRoutes.workout) }
    }


  return (
    <div className='muscle-group-card mt-4'>
        <h2 style={{direction: direction=== 'rtl'? 'rtl':'ltr'}} 
            className='my-5'>
            {isStepsCompleted? 
                completedMessage: 
                unCompletedMessage}
        </h2>

        {isStepsCompleted? 
            <div onClick={onNextBtnClick} className='pt-4 col-md-4 mx-auto'>
                <CostumBtn  txt={startBtnTxt} theme='light' />
            </div> : null}
    </div>
  )
}

export default StartStepCard