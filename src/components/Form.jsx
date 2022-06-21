import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({addNewUser, updateUserById, objectUpdate, setObjectUpdate, handleSubmit, register, reset, edit}) => {

  const [showPass, setShowPass] = useState(false)
    

    const submit = data => {
      if (objectUpdate?.id !== undefined) {
        updateUserById(objectUpdate.id, data)
      } else {
        addNewUser(data)
      }
      
        
    }

    const hidePassword = () => {
      setShowPass(!showPass)
    }

    
  return (
    <article className='form-container'>
    <form className='form' onSubmit={handleSubmit(submit)} action="">
        <div className='name'>
      <input type="text" placeholder="First Name" id='first_name' {...register('first_name')}/>
      <input type="text" placeholder='Last Name' id='last_name' {...register('last_name')} />
      </div>
        <div className='email'>
      <input type="text" placeholder='Email' id='email' {...register('email')}/></div>
      <div className='birth'>
        <input type="date" placeholder='Birthday' id='birthday' {...register('birthday')}/>
      </div>
        <div className='pass'>
          <input placeholder='Password' type={showPass ? 'text' : 'password'} id='password' {...register('password')}/> <i onClick={hidePassword} className={showPass ? 'bx bxs-show' : 'bx bxs-hide'}></i>
      </div>
      <button className='form-btn'>{edit ? 'Create User' : 'Update User'}</button>
      </form>
   </article>
  )
}

export default Form