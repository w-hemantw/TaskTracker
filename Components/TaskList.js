import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, startEditTask }) => {
  if (tasks.length === 0) {
    return <h2 className="text-center text-xl text-gray-500">No Task Available</h2>;
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          startEditTask={startEditTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
