import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { useState, useEffect, useContext }  from 'react';
import { TaskProvider, TaskContext } from "./TaskContext";


function AppContent () {
  
  const { tasks, fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="todo_container">
      <Header tasks={tasks} />
      {tasks?.map(task => (
        <ListItem key={task.id} task={task} />
      ))}
    </div>
  );
}


function App() {

  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}

export default App;
