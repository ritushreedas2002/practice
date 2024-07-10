// src/TaskCard.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask, moveTask } from '../store/taskSlice';
import { taskTypes } from '../utils/transition';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    dispatch(updateTask({ id: task.id, title, description }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleMove = (direction) => {
    const currentIndex = taskTypes.indexOf(task.type);
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < taskTypes.length) {
      dispatch(moveTask({ id: task.id, newType: taskTypes[newIndex] }));
    }
  };
  return (
    <div className="bg-white p-4 rounded shadow-md mb-2">
      {isEditing ? (
        <>
          <input
            className="p-2 border rounded mb-2 w-full"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="p-2 border rounded mb-2  w-full h-28 max-h-[200px] resize-y "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="p-2 bg-gray-400 text-white rounded" onClick={handleUpdate}>
            Save
          </button>
        </>
      ) : (
        <>
          <div className="border p-2 mb-2">
            <h3 className="font-bold">{task.title}</h3>
          </div>
          <div className="border p-2 mb-2">
            <p>{task.description}</p>
          </div>
          <div className="border p-2 mb-2 flex justify-between">
            <button className="mr-2 p-1 bg-gray-500 text-white rounded" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="mr-2 p-1 bg-gray-500 text-white rounded" onClick={handleDelete}>
              Delete
            </button>
            <div className="flex">
              {taskTypes.indexOf(task.type) > 0 && (
                <button
                  className="mr-2 p-1 bg-gray-500 text-white rounded"
                  onClick={() => handleMove(-1)}
                >
                  Move Left
                </button>
              )}
              {taskTypes.indexOf(task.type) < taskTypes.length - 1 && (
                <button
                  className="mr-2 p-1 bg-gray-500 text-white rounded"
                  onClick={() => handleMove(1)}
                >
                  Move Right
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
