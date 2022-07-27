import './List.css'
function List(props){
    const deleteItem=key=>{
        const newList=props.ToDoList.filter(i=>{
           return i.key!==key;
        });
        props.setToDoList(newList);

    };
    return(
        <div>
            {props.ToDoList.map(i=>{
               return(
                  <div className="Item">
                      <p>{i.item}</p>
                      <button onClick={()=>deleteItem(i.key)}
                      type="button" className="btn btn-outline-danger">Delete</button>
                      </div> 
               );
                

            })}
        </div>
    )
}
export default List;
