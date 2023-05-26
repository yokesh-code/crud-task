import React,{useState} from 'react'
import './App.css'
// import Data from './Data'
import AddUser from './AddUser'
import userList from './Data'
import UserTable from './tables/UserTable'
import EditUser from "./EditUser"
function App() {

  const [users,setUsers]=useState(userList)

  const addUser = user=>{
    user.id=users.length +1;
    setUsers([...users,user]);
  }

  const deleteUser= id=>{
    setUsers(users.filter(user=>user.id!==id));
  }

  const [editing, setEditing] = useState(false);

const initialUser = {id: null, name: '', username: ''};

const [currentUser, setCurrentUser] = useState(initialUser);

const editUser = (id, user) => {
  setEditing(true);
  setCurrentUser(user);
}
const updateUser = (newUser) => {
  setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
}
  return (
    <div className="container">
      <h1>React CRUD App with Hooks</h1>
      <div className="row">
        <div className="addUsser">
          { editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUser
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUser addUser={addUser} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  )
}

export default App