import React, { useState } from 'react';

const EditTaskForm = ({ task, updateTask, cancelEdit }) => {
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.desc);
  const [warning, setWarning] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Validation: Check if title or description is empty
    if (!title.trim() || !desc.trim()) {
      setWarning('Title and description are required.');
      return;
    }

    setWarning(''); // Clear warning if inputs are valid
    updateTask({ title, desc }); // Update the task
  };

  return (
    <form onSubmit={submitHandler} className="flex items-center space-x-4 my-4">
      <input
        type="text"
        className="text-2xl border-zinc-800 border-4 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Edit Title Here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="text-2xl border-zinc-800 border-4 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Edit Description Here"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button className="bg-indigo-600 text-white px-4 py-2 text-2xl font-bold rounded-lg shadow-sm hover:bg-indigo-500 transition duration-300">
        Update Task
      </button>
      <button
        type="button"
        onClick={cancelEdit}
        className="bg-gray-300 text-black px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300"
      >
        Cancel
      </button>
      {warning && <p className="text-red-500 mt-2">{warning}</p>} {/* Show warning if validation fails */}
    </form>
  );
};

export default EditTaskForm;
