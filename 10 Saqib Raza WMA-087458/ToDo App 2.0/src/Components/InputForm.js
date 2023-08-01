import React, { useState } from 'react';
import Header from './Header'
import TaskItem from './TaskItem';

export default function InputForm() {
    const [inputList, setInputList] = useState('');
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const itemsList = () => {
        setItems((oldItems) => {
            return [inputList, ...oldItems];
        });
        setInputList('');
    };

    const deleteItem = (index) => {
        setItems((oldItems) => {
            const updatedItems = oldItems.filter((_, i) => i !== index);
            return updatedItems;
        });
    };

    return (
        <div className='container text-center px-3 py-3 bg-mint-cream'>
            <Header />
            <div className='input-group mb-3'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter a task'
                    value={inputList}
                    onChange={itemEvent}
                />
                <button className='btn btn-primary' onClick={itemsList}>
                    Add Task
                </button>
            </div>

            {items.map((itemValue, index) => (
                <TaskItem key={index} itemValue={itemValue} onDelete={() => deleteItem(index)} />
            ))}
        </div>
    );
}
