import React,{useState} from 'react'
import List from './List';
function ToDoListApp(){
    const [CurrentItem,setCurrentItem]=useState(null);
    const [ToDoList,setToDoList]=useState([]);
    const ChangeIt=(e)=>{
        setCurrentItem(e.target.value);
            }
    const addItems=()=>{
        setToDoList([...ToDoList,{item:CurrentItem,key: Date.now()}]);
        setCurrentItem("");
    };
    return(
        <div className="App"> <h2 style={{color:"orange"}}>||ToDoListApp Using ReactJs||</h2>
        <header className="App-header">
            <div className="Wrapper">
                <div className="Input-wrapper">
                    <input placeholder="Enter the tasks..." value={CurrentItem} onChange={ChangeIt}/>
                    <button type="button" className="btn btn-outline-primary" onClick={addItems}>Add</button>
                </div>
                <List ToDoList={ToDoList} setToDoList={setToDoList}/>
            </div>
        </header>
      

    </div>
    );
}
export default ToDoListApp;

