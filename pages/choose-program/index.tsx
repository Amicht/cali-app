import React from 'react'
import PageSubtitle from '../../components/titles/PageSubtitle';
import PageTitle from '../../components/titles/PageTitle';
import { LanguageCtst } from '@/services/context/LanguageService';
import { WorkourProgramCtxt } from '@/services/context/WorkoutProgramService';
import { ProgramMuscleGroups, WorkoutModel } from '@/models/workoutModel';
import StepBtnComponent from '@/components/choose-program/stepper/StepBtnComponent';
import MuscleGroupCard from '@/components/choose-program/muscle-group-card/MuscleGroupCard';
import StartStepCard from '@/components/choose-program/stepper/StartStepCard';
import MuscleGroupModal from '@/components/choose-program/muscle-group-modal/MuscleGroupModal';
import Head from 'next/head';


const ChooseProgram = () => {
  const {language} = React.useContext(LanguageCtst);
  const {funcs, states} = React.useContext(WorkourProgramCtxt);
  const [muscleChoice, setMuscleChoice] = React.useState<string>("");
  const [currentMuscleGroupName, setCurrentMuscleGroupName] = React.useState<keyof ProgramMuscleGroups | string>("pull");
  const [isProgramOK, setIsProgramOK] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const muscleGroups = language.chooseProgramScreen.muscleGroups;
  const startWorkoutStepNumber = 4;
  const headTitle = language.chooseProgramScreen.title.map(s => s.txt).join(' ');
  
  
  const [show, setShow] = React.useState(false);
  
  const handleClose = () => { setShow(false); }

  const onAddExerciseBtnClicked = () => {
    setCurrentStep(currentStep + 1);
    if(!isProgramOK) setIsProgramOK(funcs!.checkIsProgramOK());
    setShow(false);
  }
  
  const onMuscleClick = (muscle:string, 
    muscleGrpName:string) => {
    funcs!.loadingHandler(true);    

    funcs!.getMuscleExercises({muscle})
    .then(() => {
      setMuscleChoice(muscle);
      setCurrentMuscleGroupName(muscleGrpName);
    })
    .then(() => {
      funcs!.loadingHandler(false);
      setShow(true);
    })
  }

  const isMslGrpChosen = (mscGrpName:string, userProgram:WorkoutModel) => {
    
    if(!!userProgram){ 
      const checkResult = Object.entries(userProgram.mslGrp).filter(msclGrp => (msclGrp[0] === mscGrpName) && (msclGrp[1].exercise  != null)).length > 0;
      return !!checkResult;
    }
    else return false;
  } 
  

  React.useEffect(() => {
    window.scrollTo(0, 0);
    funcs!.onProgramInit();
    setIsProgramOK(funcs!.checkIsProgramOK());
  },[]);


  return (
    <div className='screen mt-4'> 
      <Head>
        <title>{headTitle}</title>
        <meta name='description' content={language.chooseProgramScreen.subtitle}></meta>
      </Head>
      <PageTitle 
        title={language.chooseProgramScreen.title}
          />
      <PageSubtitle 
        subtitle={language.chooseProgramScreen.subtitle}
        direction={language.direction} />

      <div className='row mb-5 mt-5'>

          <div className='row col-md-9 mx-auto px-auto'>
            <div className='row mx-auto'>

              {muscleGroups.map((mslGrp, idx) =>
              <StepBtnComponent 
                key={mslGrp.name + idx}
                onStepClick={() => setCurrentStep(idx)}
                isCurrentStep={currentStep === idx}
                stepName={mslGrp.name} 
                isFinished={idx< currentStep && isMslGrpChosen(mslGrp.name, states!.userProgram)} 
                stepNumber={idx+1} />
              )}

              <StepBtnComponent 
                key={"start-step"}
                onStepClick={() => setCurrentStep(startWorkoutStepNumber)}
                isCurrentStep={currentStep === startWorkoutStepNumber}
                stepNumber={startWorkoutStepNumber + 1}
                stepName={"start!"} 
                isFinished={isProgramOK} />

            </div>

          
          {/* muscle-step cards */}
          {muscleGroups.filter((grp,idx) => idx === currentStep)
            .map((grp,idx) => 
              <div 
                className='mx-auto pt-3'
                key={grp.name}>
                  <MuscleGroupCard 
                    isChosen={false}
                    muscles={grp.muscles}
                    name={grp.name}
                    onMuscleClick={onMuscleClick}/>
              </div>)
          }

          {/* start-workout-step card */}
          {currentStep === startWorkoutStepNumber? 
            <StartStepCard isStepsCompleted={isProgramOK}
              startBtnTxt={language.chooseProgramScreen.nextScreenBtn}/>
              :null}
          </div>

          <MuscleGroupModal 
            onAddExerciseBtnClicked={onAddExerciseBtnClicked}
            handleClose={handleClose} 
            show={show} 
            muscleName={muscleChoice} 
            muscleGroupName={currentMuscleGroupName || "pull"}/>
      </div>
      
    </div>
  )
}

export default ChooseProgram