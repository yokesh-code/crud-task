import React, {useState} from 'react';
import "./edituser.css"
const EditUser = (props) => {

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }

    return (
        <form>
            <label>Name</label>
            <input className="in1" type="text" value={user.name} name="name" onChange={handleChange} />
            <br />
            <br />
            <label>Username</label>
            <input className="in1" type="text" value={user.username} name="username" onChange={handleChange} />
            <br />
            <br />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUser;