import React from 'react';
import '../App.css';

const Task = (props) => {

    const deleteTask = () => {
        props.borrar(props.id);
    }

    return (
        <>
            <div className="task">
                < li className="list-group-item  bg-warning" style={{ borderRadius: 3 }}>
                    <span>{props.task}</span><span className="borrar"><i onClick={deleteTask} className="fas fa-trash basura"></i></span>
                </ li>
            </div>
        </>
    )
}

export default Task;