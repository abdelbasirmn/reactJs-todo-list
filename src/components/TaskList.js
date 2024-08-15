import React from 'react';
import TaskItem from './TaskItem';

/**
 * Liste des tâches affichées avec les options pour modifier, supprimer ou basculer leur statut.
 * @param {Array} tasks - Liste des tâches à afficher.
 * @param {function} updateTask - Fonction pour mettre à jour une tâche.
 * @param {function} deleteTask - Fonction pour supprimer une tâche.
 * @param {function} toggleComplete - Fonction pour basculer le statut de complétion de la tâche.
 * @param {function} setTaskToEdit - Fonction pour définir la tâche à éditer.
 */
function TaskList({ tasks, updateTask, deleteTask, toggleComplete, setTaskToEdit }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          setTaskToEdit={setTaskToEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;
