import React,{useState} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import './TodoCreate.css';

function TodoCreate() {
    const history = useHistory()
    const [todo,setTodo] = useState({
        title:'',
        description:''
    });
    const {title,description} = todo;
    const onChange=e=>{
        setTodo({...todo,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        try{
            const body = {title,description}
            const res = await axios.post('http://localhost:8000/todos',body)
            console.log(res);
            history.push(`/${res.data.todo._id}`)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="todo-create">
            <h1 className="todo-create-header"><Link to="/" id="detail-link-header">Todo Create</Link></h1>
            <form onSubmit={e=>onSubmit(e)} className="todo-create-form">
                <h2 className="form-header">Create a Todo</h2>
                <label id="title-label" for="title">Title:-</label>
                <input onChange={e=>onChange(e)} id="title" name="title" placeholder="Title"/>

                <label id="description-label" for="description">Description:-</label>
                <input onChange={e=>onChange(e)} id="description" name="description" placeholder="Description"/>

                <button className="button-create">Create</button>
            </form>
        </div>
    )
}

export default TodoCreate
