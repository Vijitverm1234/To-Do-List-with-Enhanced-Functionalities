import react,{useState} from 'react';
import './to-do.css'
function ToDoList(){
    const [task,setTask]=useState([]);
    const [newtask,setNewtask]=useState("")
    function handleInputChange(event){
   setNewtask(event.target.value);
    }
    function addTask(){
  if(newtask.trim()!="")
  setTask(t=>[...t,newtask]);
  setNewtask("")
    }
    function deleteTask(index){
    const updateTask=task.filter((_,i)=>i!=index)
    setTask(updateTask)
    }
    function moveTaskup(index){
    if(index>0){
      const updateTask=[...task];
      [updateTask[index],updateTask[index-1]]=[updateTask[index-1],updateTask[index]]
      setTask(updateTask)
    }
    }
    function moveTaskDown(index){
      if(index<task.length-1){
        const updateTask=[...task];
        [updateTask[index],updateTask[index+1]]=[updateTask[index+1],updateTask[index]]
        setTask(updateTask)
      }
    }
return(<>
  <div className="to-do-list">
    <h1>To-Do-List</h1>
    <div className="">
        <input type="text" placeholder='Enter a task' value={newtask} onChange={handleInputChange}/>
        <button className='add-task' onClick={addTask}>Add task</button>
    </div>
 
  <ol>
    {task.map((task,index)=>
        <li key={index}>
            <span className='text'>{task}</span>
            <div className="btn">
            <button className='delete' onClick={()=>deleteTask(index)}>Delete</button>
            <button className='move-up' onClick={()=>moveTaskup(index)}>☝️</button>
            <button className='move-down' onClick={()=>moveTaskDown(index)}>👇</button>
            </div>

        </li>
    )}
  </ol>
  </div>
</>)
}
export default ToDoList;