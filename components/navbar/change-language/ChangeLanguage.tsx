import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { LanguageCtst } from '../../../services/context/LanguageService';
import styles from'./change-language.module.css';
import classNames from 'classnames';


const ChangeLanguageComponent = () => {
    const {changeLangHandler, getLangOpts, language } = React.useContext(LanguageCtst);
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onLangSelect = (langName: string) => {
        if(changeLangHandler){
            changeLangHandler(langName);
            handleClose();
        }
    }

  return (
    <>
      <span className='link me-3 mt-1' onClick={handleShow}>
        {language.navbar.language.btn_name}
      </span>

      <Modal 
        
        show={show} 
        onHide={handleClose}>

        <Modal.Header closeButton className='bg-dark border-secondary'>
        </Modal.Header>

        <Modal.Body 
          className='bg-dark'>
            {getLangOpts? getLangOpts().map(lan => 
                <div 
                  key={lan.key}
                  className={classNames("mx-auto text-primary my-2 lang-option", styles.langOption)}
                  onClick={() => onLangSelect(lan.key)}>
                    {lan.name}
                </div>)
                :null}
        </Modal.Body>

      </Modal>
    </>
  )
}

export default ChangeLanguageComponent