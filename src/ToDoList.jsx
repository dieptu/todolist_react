import React, {useState} from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breakfast", "Do skincare", "Brush Teeth"]);
    const [newTask, setNewTask] = useState("");


    function handleInputChange(event){
        //allow to see the input in the textbox
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){ //trim the string, if strickly empty add task
            setTasks(t => [...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

    return(
    <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange} />

            <button className="add-button"
                onClick={addTask}>
                    Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button"
                        onClick={() => deleteTask(index)}>
                            Delete</button>
                    <button className="move-button"
                        onClick={() => moveTaskUp(index)}>
                            Up</button>
                    <button className="move-button"
                        onClick={() => moveTaskDown(index)}>
                            Down</button>
                </li>
            )}
        </ol>
        
    </div>
    );


}

export default ToDoList