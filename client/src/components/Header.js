import React from 'react'
import { useState, useContext } from 'react';
import Modal from './Modal';
import { TaskContext } from '../TaskContext';

function Header({ tasks}) {

const [ openModal, setOpenModal] = useState(false);

  return (
        <div className='todo_header_title'>
            <div>
                <h1>Tiny's Task List</h1>
            </div>
            <div className='todo_buttons'>
                <button onClick={()=> setOpenModal(true)}>Add Task</button>
                <button>Logout</button>
            </div>
            {openModal && <Modal tasks={tasks} mode={'add'} setOpenModal={setOpenModal} />}
        </div>
  )
}

export default Header