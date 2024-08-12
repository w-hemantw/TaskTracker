"use client";
import React, { useState, useEffect } from 'react';
import TaskForm from '@/Components/TaskForm';
import TaskList from '@/Components/TaskList';
import EditTaskForm from '@/Components/EditTaskForm';

const Page = () => {
  const [mainTask, setMainTask] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setMainTask(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever mainTask changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(mainTask));
  }, [mainTask]);

  const addTask = (task) => {
    setMainTask([...mainTask, task]);
  };

  const deleteTask = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };

  const startEditTask = (index) => {
    setEditIndex(index);
  };

  const updateTask = (task) => {
    const updatedTasks = [...mainTask];
    updatedTasks[editIndex] = task;
    setMainTask(updatedTasks);
    setEditIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
  };

  // Filter tasks based on search query
  const filteredTasks = mainTask.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="bg-black text-white p-5 text-xl text-center font-bold">
        TODO LIST
      </h1>
      {editIndex === null ? (
        <TaskForm addTask={addTask} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      ) : (
        <EditTaskForm
          task={mainTask[editIndex]}
          updateTask={updateTask}
          cancelEdit={cancelEdit}
        />
      )}
      <hr />
      <div className="p-8 bg-slate-200">
        <TaskList tasks={filteredTasks} deleteTask={deleteTask} startEditTask={startEditTask} />
      </div>
    </>
  );
};

export default Page;
