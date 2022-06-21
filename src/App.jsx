import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Cards from './components/Cards'
import { useForm } from 'react-hook-form'
import Form from './components/Form'

function App() {
 const [users, setUsers] = useState()
 const [isShowForm, setIsShowForm] = useState(false)
 const [objectUpdate, setObjectUpdate] = useState()
 const {handleSubmit, register, reset} = useForm()
 const [edit, setEdit] = useState(true)

 const URL = 'https://users-crud1.herokuapp.com/users/'

 const getAllUsers = () => {
  axios.get(URL)
  .then(res => setUsers(res.data))
  .catch(err => console.log(err))
 }
 

 useEffect(() => {
   getAllUsers()
 }, [])


 const addNewUser = data => {
    axios.post(URL, data)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  .finally(() => getAllUsers())
  
  
 }
 

const deleteUser = id => {
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  .finally(() => getAllUsers())
}

const updateUserById = (id, update) => {

  axios.patch(`${URL}${id}/`, update)
  .then(res => {
    console.log(res.data)
    getAllUsers()
    setObjectUpdate()
    setIsShowForm(false)
  })
  .catch(err => console.log(err))
}

const showForm = () => {
  const obj = {
    duration: '',
    genre: '',
    name: '',
    release_date: ''
  }
  reset(obj)
  setIsShowForm(!isShowForm)

  
}

 console.log(users)
  return (
    <div className="App">
      <button className='app-btn' onClick={showForm}>{isShowForm ? 'Hide Form' : 'Create User'}</button>
      {
        isShowForm && <Form 
        addNewUser={addNewUser}
        updateUserById={updateUserById}
        objectUpdate={objectUpdate}
        setObjectUpdate={setObjectUpdate}
        handleSubmit={handleSubmit}
        register={register}
        reset={reset}
        edit={edit}
        setEdit={setEdit}
        /> 
      }
      {
        users?.map(user => (
          <Cards
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setObjectUpdate={setObjectUpdate}
          setIsShowForm={setIsShowForm}
          reset={reset}
          edit={edit}
        setEdit={setEdit}
          />
        ))
      }
    </div>
  )
}

export default App
