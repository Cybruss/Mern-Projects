import React from "react";
import './Task.css';

export default function Task({Task,editFunction,doneFunction,deleteFunction}) {
    function doneFun(){
        // console.log(Task);
        doneFunction(Task.key);
    }

    function editFun(){
        let updatedMessage=prompt('Enter updated message');
        editFunction(Task.key,updatedMessage);
    }
    function delFun(){
        deleteFunction(Task.key);
    }

    return (
        <div className="container">
            <div className="bord row my-4 " style= {{backgroundColor: Task.done?'green':'white'}} > 
                <div className="col-6 align-middle" >
                    {Task.message}
                </div>
                
                <div className="col-2"><button onClick= {doneFun}className="btn btn-primary">Done</button></div>
                <div className="col-2"><button onClick={editFun} className="btn btn-primary">Edit</button></div>
                <div className="col-2"><button onClick={delFun}  className="btn btn-primary">Delete</button></div>

            </div>
        </div>
    );
    
    

}