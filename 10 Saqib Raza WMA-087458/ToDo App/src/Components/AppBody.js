import React, { useState } from 'react'

export default function AppBody() {


    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const itemsList = () => {
        setItems((oldItems) => {
            return [inputList, ...oldItems];
        });
        setInputList("");
    };

    const deleteItem = (index) => {
        setItems((oldItems) => {
            const updatedItems = oldItems.filter((_, i) => i !== index);
            return updatedItems;
        });
    };



    return (
        <div className='container text-center px-3 py-5 bg-mint-cream'>
            <div className="row">
                <div className="col-">
                    <h1>
                        To Do List App
                    </h1>
                    <p>Designed & Developed by <span className='fw-bold'>Saqib Raza</span></p>
                </div>
            </div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a task"
                    value={inputList}
                    onChange={itemEvent}
                />
                <button className="btn btn-primary" onClick={itemsList}>
                    Add Task
                </button>
            </div>

            {
                items.map((itemValue, index) => {
                    return (
                        <div key={index} className="task-list-container d-flex">
                            <li className="task-list"> {itemValue} </li>
                            <button className="btn btn-danger del-btn" onClick={() => deleteItem(index)}>Delete</button>
                        </div>
                    )
                }
                )
            }



        </div>
    )
}
