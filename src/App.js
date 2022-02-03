import React, { useEffect, useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';


const App = () => {

    const [taskList, setTaskList] = useState([]);
    const [username, setUsername] = useState('victorcl');

    const todosUrl = 'http://assets.breatheco.de/apis/fake/todos/user/';

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = async () => {
        try {
            await fetch(`${todosUrl}${username}`)
                .then(data => data.json())
                .then(setTaskList)
                .catch(error => console.log(error))
        } catch (error) {
            throw error;
        }
    }

    const updateTasks = async (array) => {
        try {
            await fetch(`${todosUrl}${username}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(array)
            })
                .then(data => data.json())
                .then(console.log)
                .catch(console.log)
        } catch (error) {
            throw error;
        }
    }

    const addTask = (todo) => {
        const task = [todo, ...taskList];
        setTaskList(task);
        updateTasks(task);
    }

    const isDone = (i) => {
        const task = (item, index) => {
            if (index === i) {
                item.done = !item.done;
            }
            return item;
        }
        const done = taskList.map(task);
        setTaskList(done);
        updateTasks(done);
    }

    const deleteTask = (id) => {
        const filterList = taskList.filter((e, index) => index !== id);
        setTaskList(filterList);
        updateTasks(filterList);
    }

    return (
        <div className="container">
            <h1>TO DO LIST</h1>
            <TaskForm
                addTask={addTask}
            />

            {
                taskList.map((todos, index) =>
                    <Task
                        {...todos}
                        deleteTask={deleteTask}
                        isDone={isDone}
                        id={index}
                        key={index}
                    />)
            }
        </div>
    )
}

export default App;