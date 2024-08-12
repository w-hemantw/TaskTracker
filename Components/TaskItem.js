import React from 'react';

const TaskItem = ({ task, index, deleteTask, startEditTask }) => {
  return (
    <li className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex flex-col w-2/3">
        <h5 className="text-2xl font-semibold">{task.title}</h5>
        <h6 className="text-lg font-medium text-gray-600">{task.desc}</h6>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => startEditTask(index)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-400 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(index)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-red-400 transition duration-300"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
