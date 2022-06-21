import axios from 'axios'
import React from 'react'

const Cards = ({user, deleteUser, setObjectUpdate, setIsShowForm, reset, edit, setEdit}) => {

 const updateUser = () => {
  setIsShowForm(true)

  const obj = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    birthday: user.birthday,
    password: user.password
  }
  reset(obj)
  setObjectUpdate(user)
  setEdit(false)
 }

    
  return (
    <article>
        <div className='card'>
         <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>{user.email}</p>
        <b>{user.birthday}</b>
        <div className='card-icons'>
        <i onClick={updateUser} className='bx bxs-edit-alt' ></i>
        <i onClick={() => deleteUser(user.id)} className='bx bxs-trash' ></i>
        </div>
        </div>
        
    </article>
  )
}

export default Cards