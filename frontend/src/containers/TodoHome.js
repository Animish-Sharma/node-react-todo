import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom';
import "./TodoHome.css";
import { AiOutlinePlus } from 'react-icons/ai';
function TodoHome() {
    const history=useHistory()
    const [todo,setTodo] = useState({
        todos:[]
    })
    useEffect(()=>{
        const fetchData=async ()=>{
            const res = await axios.get("http://localhost:8000/todos");
            setTodo(res.data)
        };
        fetchData();
    },[]);

    const onDelete=async (_id)=>{
        try{
            await axios.delete(`http://localhost:8000/${_id}`);
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="todo-home">
            <h1 className="todo-header">Todo List</h1>
            <div className="home-icon-div">
              <AiOutlinePlus id="home-icon" onClick={()=>history.push('/create')} />  
            </div>
            <div className="todo-list">
                {todo.todos.map((todos,i)=>{
                    return <div className="todo-card" key={i}>
                        <h3 className="todo-card-header">{todos.title}</h3>
                        <p className="todo-card-content">{todos.description}</p>
                        <div className="card-links">
                            <Link id="detail-link" to={`/${todos._id}`}>Read More</Link>
                            <button onClick={()=>onDelete(todos._id)} className="card-delete">Delete Todo</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TodoHome
