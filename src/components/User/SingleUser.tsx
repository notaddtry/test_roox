import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { IUser } from '../../types/userType'
import InputUser from './InputUser'

const SingleUser = () => {
  const params = useParams()
  const users = useAppSelector((state) => state.user.users)
  const user = users.find((user) => user.id == params.id)
  console.log(user)

  return (
    <div className='singleUser_wrapper'>
      <div className='singleUser_header'>
        <h1 className='singleUser_title'>Профиль пользоваетля</h1>
        <button className='singleUser_btn-edit'>Редактировать</button>
      </div>
      <div className='singleUser_body'>
        {user &&
          Object.keys(user).map((key) => (
            // console.log(user[key as keyof IUser])

            <InputUser
              key={key as keyof IUser}
              value={user[key as keyof IUser]}
            />
          ))}

        {/* 
        <InputUser />
        <InputUser /> */}
      </div>
      <div className='singleUser_btns'>
        <Link to='/' className='singleUser_btn-back'>
          Назад
        </Link>
        <button className='singleUser_btn-submit'>Отправить</button>
      </div>
    </div>
  )
}

export default SingleUser
