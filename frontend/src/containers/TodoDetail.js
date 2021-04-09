import React,{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./TodoDetail.css";
function TodoDetail(props) {
    const [todo,setTodo] = useState({
        detailTodo:{}
    })
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get(`http://localhost:8000/todo/${props.match.params.id}`);
            console.log(res.data);
            setTodo(res.data);
        }
        fetchData();
    },[props.match.params.id]);
    const handleDelete=async(_id)=>{
        await axios.delete(`http://localhost:8000/${_id}`);
        console.log(props.history.push("/"))
    }
    return (
        <div className="todo-detail">
            <h1 className="todo-detail-header"><Link id="detail-link-header" to="/">Todo Detail</Link></h1>
            <div className="todo-detail-card">
                <h2 className="detail-card-header">{todo.detailTodo.title}</h2>
                <p className="detail-card-content">{todo.detailTodo.description}</p>
                <b className="detail-card-time">Created on {todo.detailTodo.date}</b>
                <div className="card-links">
                    <Link id="update-link" to={`/${todo.detailTodo._id}/update`}>Update</Link>
                    <button onClick={()=>handleDelete(todo.detailTodo._id)} className="detail-card-delete">Delete Todo</button>
                </div>
            </div>
        </div>
    )
}

export default TodoDetail
