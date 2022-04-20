import axios from 'axios'
import React, { useEffect, useMemo } from 'react'
import { getData } from '../../lib/api/fetchData'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchUsers } from '../../store/slices/userSlice'
import UserItem from './UserItem'

const UserList = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.user.users)
  let count: number = 0
  users.map(() => count++)

  useEffect(() => {
    getData(10).then((res) => dispatch(fetchUsers(res)))
  }, [])

  return (
    <div className='userList_wrapper'>
      <span className='userList_title'>Список пользователей</span>
      <ul className='userList_body'>
        {users.map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
      </ul>
      <span className='userList_count'>Найдено {count} пользователей</span>
    </div>
  )
}

export default UserList
