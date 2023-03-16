import React from 'react'

// styles
import styles from './Modal.module.css'


type Props = {
  children: React.ReactNode
}

const Modal = (props: Props) => {

  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id='modal' className='hide'>
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Edite sua tarefa</h2>
        {props.children}
      </div>
    </div>
  )
}

export default Modal