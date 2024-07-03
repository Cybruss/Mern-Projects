import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';

export default function Body() {
    const [tasks,setTasks]=useState([]);
    
    function addTaskFun(){        
        let message=document.getElementById('messageInput').value;
        if(message){
            let taskOBJ={
                key:uuidv4(),
                done:false,
                message:message
            }
            setTasks([...tasks,taskOBJ]);
            // console.log(taskOBJ);
            document.getElementById('messageInput').value="";
        }
        console.log('Add task button clicked');
    }

    function doneFunction(key){
        
        setTasks(tasks.map(task => task.key === key ? { ...task, done: true } : task));

    } 

    function deleteFunction(key){
        setTasks(tasks.filter(task => task.key !== key));
    }

    function editFunction(key,updatedMessage){
        setTasks(tasks.map(task => task.key === key ? { ...task, message: updatedMessage } : task));
    }
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center my-4">
                    <div className="">
                        <h1>TO DO List </h1>
                        <div className="my-3">
                            <input type="text" className="form-control" placeholder="Enter Task" id='messageInput' name='taskName' />
                            <button className="btn btn-primary my-3" onClick={addTaskFun}>Add Task</button>
                            <div className="my-5">
                            {tasks.map((task)=>{
                                    return <Task  Task={task} editFunction={editFunction} doneFunction={doneFunction} deleteFunction={deleteFunction}/>
                                })
                                }    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};