import React from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '../../types/userType'

interface IUserItemProps extends IUser {}

const UserItem: React.FC<IUserItemProps> = ({
  name,
  id,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className='userItem_wrapper'>
      <div className='userItem_body'>
        <span>ФИО: {name}</span>
        <br />
        <span>Город: {address?.city}</span>
        <br />
        <span>Компания: {company?.name}</span>
      </div>
      <Link to={`/user/${id}`} className='userItem_btn'>
        Подробнее
      </Link>
    </div>
  )
}

export default UserItem
