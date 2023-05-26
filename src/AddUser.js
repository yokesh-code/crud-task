import React,{useState} from 'react'
import "./AddUser.css"
const AddUser =(props)=>{
    const initUser ={id:null,name:"",username:""}
    const [user,setUser]=useState(initUser);

   const handleChange=e=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value})
    }

    const handleSubmit=e=>{
        e.preventDefault();
        if(user.name && user.username){
            handleChange(e,props.addUser(user))
        }
    }
return (
    <form className='adduser'>
        <label>Name</label>
        <input className='in1' type="text" name="name" value={user.name} onChange={handleChange}/>
        <br />
        <br />
        <label>UserName</label>
        <input className='in1' type="text" name='username' value={user.username} onChange={handleChange}/>
        <br />
        <br />
        <button className='btn' type='submit' onClick={handleSubmit}><span>Add User</span></button>
    </form>    

  )
}
export default AddUser