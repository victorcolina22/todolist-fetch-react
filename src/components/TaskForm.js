import React, { useState } from 'react';
import '../App.css';


const TaskForm = ({ addTask }) => {

    const [inputText, setInputText] = useState("")
    const [validation, setValidation] = useState(true);

    const handleInput = (event) => {
        setInputText(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if (inputText.trim() !== "") {
            const firstLetterCapitalize = inputText.charAt(0).toUpperCase() + inputText.slice(1);
            const task = { label: firstLetterCapitalize, done: false };
            addTask(task);
            setInputText("");
            setValidation(true);
        } else {
            setValidation(false);
        }
    }

    return (
        <>
            <form className="formulario" onSubmit={submit}>
                <ul className="list-group">
                    <li className="list-group-item bg-warning">
                        <input
                            className="input"
                            placeholder="What need to be done?"
                            onChange={handleInput}
                            value={inputText}
                        />
                        <i className="fas fa-plus icon" onClick={submit}></i>
                    </li>
                </ul>
            </form>
            {/* {
                !validation &&
                <div className="validation text-danger">Añade una tarea</div>
            } */}
        </>
    )
}

export default TaskForm;