import React from 'react'
import { useState, useContext } from 'react';
import { TaskContext } from '../TaskContext';
import Modal from './Modal';

function ListItem({ task }) {
 
  const [ openModal, setOpenModal] = useState(false);


  return (
    <div className='list_item'>
        <div className='task_header'>
            <h2>{task.title}</h2>
        </div>
        <div className='task_progressions'>
            <p>progression will go here</p>
        </div>
        <div className='todo_buttons'>
            <button onClick={()=> setOpenModal(true)}>Edit Task</button>
            <button>Delete Task</button>
        </div>
        {openModal && <Modal tasks={task} mode={'edit'} setOpenModal={setOpenModal} />}
    </div>
  )
}

export default ListItem