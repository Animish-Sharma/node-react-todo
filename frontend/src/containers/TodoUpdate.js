import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./TodoUpdate.css"
function TodoUpdate(props) {
    const [data,setData] = useState({
        updateTitle:'',
        updateDescription:''
    });
    const {updateTitle,updateDescription} = data;

    const onSubmit=async e=>{
        e.preventDefault();
        try{
            const title=updateTitle
            const description=updateDescription

            const body = {title,description};
            const message= await axios.put(`http://localhost:8000/${props.match.params.id}`,body);
            console.log(message.data);
        }catch(error){
            console.log(error)
        }
    }
    const onChange=e=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    return (
        <div className="todo-update">
            <h1 className="update-title"><Link id="detail-link-header" to="/">Todo Update</Link> </h1>
            <div className="update-card">
                <h2 className="update-card-title">Update the Todo</h2>
                <form onSubmit={onSubmit}>
                    <label id="label-title" for="updateTitle">Title:-</label>
                    <input onChange={e=>onChange(e)} id="updateTitle" name="updateTitle" placeholder="Title"></input>
                    <label id="label-description" for="updateDescription">Description:-</label>
                    <input onChange={e=>onChange(e)} id="updateDescription" name="updateDescription" placeholder="Description"/>
                    <button onSubmit={onSubmit} className="card-update-button">Update</button>
                </form>
                
            </div>
        </div>
    )
}

export default TodoUpdate
