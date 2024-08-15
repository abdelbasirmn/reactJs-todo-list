import React, { useState, useEffect } from 'react';

/**
 * Formulaire pour ajouter ou modifier une tâche.
 * @param {function} addTask - Fonction pour ajouter une tâche.
 * @param {object} [taskToEdit] - Tâche à éditer (optionnel).
 * @param {function} updateTask - Fonction pour mettre à jour une tâche (optionnel).
 * @param {function} setTaskToEdit - Fonction pour réinitialiser l'état d'édition.
 */
function TaskForm({ addTask, taskToEdit, updateTask, setTaskToEdit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const newTask = {
        id: taskToEdit ? taskToEdit.id : Date.now(),
        title,
        description,
        complete: taskToEdit ? taskToEdit.complete : false
      };
      if (taskToEdit) {
        updateTask(newTask);
      } else {
        addTask(newTask);
      }
      setTitle('');
      setDescription('');
      setTaskToEdit(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Titre tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description Tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{taskToEdit ? 'Mettre à jour Tâche' : 'Ajouter Tâche'}</button>
    </form>
  );
}

export default TaskForm;
