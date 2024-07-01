import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import '../components/taskInput.css'; // Import the CSS file for styling

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      dispatch(addTask({ id: Date.now(), name: taskName }));
      setTaskName('');
    }
  };

  return (
    <div className="TaskInput">
      <input className='size'
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="green-button" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
