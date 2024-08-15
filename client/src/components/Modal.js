import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../TaskContext';

function Modal({ tasks, mode, setOpenModal }) {

    const editMode = mode === 'edit' ? true : false;

  return (
    <div className='modal_overlay'>
        <div className='modal_container '>
            <button className='close_modal' onClick={()=> setOpenModal(false)}>X</button>
            <div>
                <h2>{editMode ? 'Edit' : 'Add'} Task</h2>
            </div>
            <form>
                <input
                 type='text' 
                 placeholder='Task Title'
                 required
                 maxLength={30}
                 name='title'
                  />
                <label htmlFor='range'>Drag to select your current process!</label>
                <input
                required
                type='range'
                min='0'
                max='100'
                name='progress'
                />
                <input type='submit' value={editMode ? 'Edit Task' : 'Add Task'} />
            </form>
        </div>
    </div>
  )
}

export default Modal