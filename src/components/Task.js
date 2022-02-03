import React from 'react';
import '../App.css';

const Task = ({ label, done, id, deleteTask, isDone }) => {

    return (
        <>
            <div className="task">
                < li className="list-group-item  bg-warning" style={{ borderRadius: 3 }}>
                    <span
                        className={done ? 'todo-name done' : 'todo-name'}>
                        {label}
                    </span>
                    <span className="borrar">
                        <label className='custom-checkbox'>
                            <input className='check-task' type="checkbox" value={done} onClick={() => isDone(id)} defaultChecked={done} />
                            <span className='checkmark'>
                                <i className="fa fa-solid fa-check" style={done ? { display: "block" } : { display: "none" }}></i>
                            </span>
                        </label>
                        <i
                            className="fas fa-trash basura"
                            onClick={() => deleteTask(id)}
                        >
                        </i>
                    </span>
                </ li>
            </div>
        </>
    )
}

export default Task;