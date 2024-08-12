import React, { useState } from 'react';
import SearchTask from './SearchTask';

const TaskForm = ({ addTask, searchQuery, setSearchQuery }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [warning, setWarning] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Validation: Check if title or description is empty
    if (!title.trim() || !desc.trim()) {
      setWarning('Title and description are required.');
      return;
    }

    setWarning(''); // Clear warning if inputs are valid
    addTask({ title, desc });
    setTitle('');
    setDesc('');
  };

  return (
    <form onSubmit={submitHandler} className="flex items-center space-x-4 my-4">
      <input
        type="text"
        className="text-2xl border-gray-300 border-2 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter Title Here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="text-2xl border-gray-300 border-2 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter Description Here"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button className="bg-indigo-600 text-white px-4 py-2 text-2xl font-bold rounded-lg shadow-sm hover:bg-indigo-500 transition duration-300">
        Add Task
      </button>
      <SearchTask searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {warning && <p className="text-red-500 mt-2">{warning}</p>} {/* Show warning */}
    </form>
  );
};

export default TaskForm;
