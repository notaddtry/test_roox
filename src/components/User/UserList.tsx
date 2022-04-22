import React from 'react'
import { useAppSelector } from '../../store/hooks'
import UserItem from './UserItem'

const UserList = () => {
  const users = useAppSelector((state) => state.user.users)
  let count: number = 0
  users.map(() => count++)

  //Хорошая практика - использовать useEffect здесь.
  // useEffect(() => {
  //   getData(10).then((res) => dispatch(fetchUsers(res)))
  // }, [])

  return (
    <div className='userList_wrapper'>
      <span className='userList_title'>Список пользователей</span>
      <ul className='userList_body'>
        {users.length ? (
          users.map((user) => <UserItem key={user.id} {...user} />)
        ) : (
          <p>Users not found...</p>
        )}
      </ul>
      <span className='userList_count'>Найдено {count} пользователей</span>
    </div>
  )
}

export default UserList
