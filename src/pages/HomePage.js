import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import './HomePage.css';

/**
 * Page principale où les utilisateurs peuvent ajouter, modifier, et filtrer les tâches.
 */
function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setTaskToEdit(null);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, complete: !task.complete } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.complete;
    if (filter === 'incomplete') return !task.complete;
    return true;
  });

  return (
    <div className="homepage-container">
      <h1>Bienvenue dans l'Application To-Do List</h1>
      <p>Ajoutez une tâche pour commencer à organiser vos activités quotidiennes</p>
      <TaskForm 
        addTask={addTask} 
        taskToEdit={taskToEdit} 
        updateTask={updateTask}
        setTaskToEdit={setTaskToEdit} 
      />
      <div className="filters">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Tâches
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''} 
          onClick={() => setFilter('completed')}
        >
          Completes
        </button>
        <button 
          className={filter === 'incomplete' ? 'active' : ''} 
          onClick={() => setFilter('incomplete')}
        >
          Incompletes
        </button>
      </div>
      <TaskList 
        tasks={filteredTasks} 
        updateTask={updateTask} 
        deleteTask={deleteTask} 
        toggleComplete={toggleComplete} 
        setTaskToEdit={setTaskToEdit}
      />
    </div>
  );
}

export default HomePage;
