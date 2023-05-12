import React from 'react'
import {Modal} from 'react-bootstrap/esm/';
import ExerciseCard from '../exercise-card/ExerciseCard';
import Form from 'react-bootstrap/Form';
import { ProgramMuscleGroups } from '@/models/workoutModel';
import { LanguageCtst } from '@/services/context/LanguageService';
import { WorkourProgramCtxt } from '@/services/context/WorkoutProgramService';
import { ExerciseModel } from '@/models/ExerciseModel';
import CostumBtn from '@/components/costum-button/CostumBtn';
import { cursorTo } from 'readline';

interface Props{
  show:boolean, 
  muscleGroupName: keyof ProgramMuscleGroups | string,
  muscleName: string 
  handleClose:() => void, 
  onAddExerciseBtnClicked:() => void, 
}

const MuscleGroupModal = (props:Props) => {

    const {handleClose,onAddExerciseBtnClicked,muscleGroupName,show} = props;
    const {language} = React.useContext(LanguageCtst);
    const {funcs, states} = React.useContext(WorkourProgramCtxt);
    const screenTxts = language.chooseProgramScreen;

    const [exerciseName, setExerciseName] = React.useState<string>("");
    const [exercise, setExercise] = React.useState<ExerciseModel | null>(null);
    const onCloseHandler = () => {
        setExercise(null);
        setExerciseName("");
        handleClose();
      }
    const onExerciseChange = (exName:string) => setExerciseName(exName);
    
    const onAddExerciseBtnClick = () => {
      funcs!.updateUserExerciseToProgram(muscleGroupName,exerciseName)
      .then(() => {
        setExercise(null);
        setExerciseName("");
        onAddExerciseBtnClicked();
      })
    }
    
    React.useEffect( () => {
        if(!exerciseName && show) {
          setExercise(states!.exercises[0] );
          setExerciseName(states!.exercises[0].name);
        }
        else if(show) {
          setExercise(states!.exercises.filter(
            (ex:ExerciseModel) => ex.name === exerciseName)[0]);
        }
    }, [exerciseName, show]);

    return (
      <>
        <Modal className='costum-model  text-secondary muscle-modal'
          show={show}
          onHide={onCloseHandler}
          backdrop="static"
          keyboard={false}
          contentClassName='bg-success'
          fullscreen={true}
        >
          <Modal.Header closeButton className='text-secondary'>
            
            <Modal.Title 
              style={{direction: language.direction === 'rtl'?'rtl':'ltr'}}
              className='row col-md-10 mx-auto'>
                <span 
                  className='col-sm-5'>
                    {screenTxts.modalTitle} 
                </span>
                
                {(states!.exercises && (states!.exercises.length > 0))?
                <Form.Select 
                  style={{cursor:'pointer'}}
                  className='col-sm bg-secondary text-center text-dark border-dark' 
                  onChange={(e) => onExerciseChange(e.currentTarget.value)}>

                {states!.exercises.map((exrcs:ExerciseModel,idx:number) => 
                      <option 
                        value={exrcs.name} 
                        key={idx}>
                          {exrcs.name}
                      </option>
                    )}
                </Form.Select>:null}
           
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className='row text-center'>

            {exercise?<div className='col-md'>
                <ExerciseCard exercise={exercise}/>
            </div>:<div className='mt-3'>No Exercises Found.</div>}
          
          </Modal.Body>

          <Modal.Footer>
            <div onClick={onCloseHandler} className='col-md-3'>
              <CostumBtn 
                side='btn-left'
                theme={'dark'} 
                txt={screenTxts.modalBtns.close}/>
            </div>
            <div onClick={onAddExerciseBtnClick} className='col-md-3'>
              <CostumBtn 
                theme={'light'} 
                txt={screenTxts.modalBtns.add}/>
            </div>
          </Modal.Footer>

        </Modal>
      </>
    );
}

export default MuscleGroupModal