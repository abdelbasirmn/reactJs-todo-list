import React from 'react';

/**
 * Composant pour afficher une tâche avec des options pour la modifier, la supprimer ou basculer son statut.
 * @param {object} task - La tâche à afficher.
 * @param {function} updateTask - Fonction pour mettre à jour la tâche.
 * @param {function} deleteTask - Fonction pour supprimer la tâche.
 * @param {function} toggleComplete - Fonction pour basculer le statut de complétion de la tâche.
 * @param {function} setTaskToEdit - Fonction pour définir la tâche à éditer.
 */
function TaskItem({ task, updateTask, deleteTask, toggleComplete, setTaskToEdit }) {
  return (
    <div className={`task-item ${task.complete ? 'complete' : ''}`}>
      <div className="task-content">
        <div className="task-details">
          <h3 className={task.complete ? 'task-title-complete' : ''}>{task.title}</h3>
          <p className={task.complete ? 'task-desc-complete' : ''}>{task.description}</p>
        </div>
        <div className="task-actions">
          <button onClick={() => toggleComplete(task.id)}>
            {task.complete ? 'Marquer comme incomplete' : 'Marquer comme complete'}
          </button>
          <button onClick={() => setTaskToEdit(task)}>
            Modifier
          </button>
          <button onClick={() => deleteTask(task.id)}>supprimer</button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
