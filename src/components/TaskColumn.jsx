import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';
import TaskCard from './TaskCard';
const TaskColumn = ({ type }) => {
    const tasks = useSelector((state) => state.tasks.tasks.filter(task => task.type === type));
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleAddTask = () => {
      dispatch(addTask({ id: Date.now(), title, description, type }));
      setTitle('');
      setDescription('');
      setShowForm(false);
    };

    return (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-80 h-[500px] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">{type.toUpperCase()}</h2>
      <button className="mb-4 p-2 bg-gray-500 text-white rounded w-full " onClick={() => setShowForm(true)}>
        Add Task
      </button>
      {showForm && (
        <div className="mb-4">
          <input
            className="p-2 border rounded mb-2 w-full"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="p-2 border rounded mb-2 w-full h-28 max-h-[200px] resize-y"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="p-2 bg-gray-500 text-white rounded" onClick={handleAddTask}>
            Add
          </button>
        </div>
      )}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};



export default TaskColumn;