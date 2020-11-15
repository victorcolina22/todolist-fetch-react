import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

const App = () => {

    const [taskList, setTaskList] = useState([]);

    const newTask = (task) => {
        setTaskList([task, ...taskList])
    }

    const borrar = (id) => {
        const filterList = taskList.filter((e, index) => index !== id);
        setTaskList(filterList);
    }

    return (
        <div className="container">
            <h1>TO DO LIST</h1>
            <TaskForm newTask={newTask}
            />

            {
                taskList.map((e, index) => 
                <Task 
                task={e} 
                borrar={borrar} 
                id={index}
                />)
            }
        </div>
    )
}

export default App;