import React from 'react';

export default function TaskItem({ itemValue, onDelete }) {
  return (
    <div className='task-list-container'>
      <li className='task-list'>{itemValue}</li>
      <button className='btn btn-danger del-btn' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
