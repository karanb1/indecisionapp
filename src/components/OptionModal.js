import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=> {
    return(
        <Modal
         isOpen = {!!props.selectedOption}
         onRequestClose = {props.closeModal}
         contentLabel = "sometext"
         closeTimeoutMS = {200}
         className ="modal">
          <h1 className="modal__title">Selected Option</h1>
          {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
          <button onClick={props.closeModal}>okay</button>
        </Modal>
    )
};

export default OptionModal;