import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const TaskContext = createContext();

// Create a provider component
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState({
        user_email: 'bryano@email.com',
        title: '',
        progress: 100,
        date: new Date()
    }); 

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:5000/tasks');
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = async (task) => {
        try {
            const response = await fetch('/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            }); 
            const newTask = await response.json();
            setTasks([...tasks, newTask]);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await fetch(`/tasks/${taskId}`, {
                method: 'DELETE',
            });
            setTasks(tasks.filter(task => task.id !== taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const editTask = async (taskId, updatedTask) => {
        try {
            const response = await fetch(`/tasks/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTask),
            });
            const newTask = await response.json();
            setTasks(tasks.map(task => (task.id === taskId ? newTask : task)));
        } catch (error) {
            console.error('Error editing task:', error);
        }
    };

    const updateData = (newData) => {
        setData(newData);
    };

    return (
        <TaskContext.Provider value={{ tasks, fetchTasks, addTask, data, updateData, isEditing, setIsEditing, editTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};