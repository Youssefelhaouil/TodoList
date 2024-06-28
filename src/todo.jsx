import React, { useState } from 'react'
function Todo() {
    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }
    function handleAddTask() {
        if (newTask.trim() !== '') {
            setTask(t => [...t, newTask])
            setNewTask('')
        }
    }
    function handleRemoveTask(index) {
        setTask(tasks.filter((_,i)=> i!==index));
    }
    function handleUpTask(index) {
        const updateTask=[...tasks];
        [updateTask[index] ,updateTask[index-1]]=[updateTask[index-1] ,updateTask[index]];
        if( index > 0){
            setTask(updateTask)
        }

    }
    function handleDownTask(index) {
        const updateTask=[...tasks];
        [updateTask[index] ,updateTask[index+1]]=[updateTask[index+1] ,updateTask[index]];
        if( index < tasks.length-1){
            setTask(updateTask)
        }

    }


    return (
        <>
            <div className='todolist-container'>
                <h1 className='first'>Todo <span>List</span></h1>
                <div className='todo-input'>
                    <input type="text" id='task-input' value={newTask} onChange={handleInputChange} placeholder='enter Your task...' />
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
                <div className='todo-result'>
                    {tasks.map((task, index) => (
                        <h1 className='task' key={index} >{task}
                            <button className='delete-task' onClick={() => handleRemoveTask(index)}>delete</button>
                            <button className='move-button' onClick={() => handleUpTask(index)}>up</button>
                            <button className='move-button' onClick={() => handleDownTask(index)}>down</button>
                        </h1>))}
                </div>
            </div>

        </>
    )

}
export default Todo