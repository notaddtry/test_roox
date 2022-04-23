import React from 'react'
import { useAppSelector } from '../../store/hooks'

import UserItem from './UserItem'

import styles from './User.module.scss'

const UserList = () => {
  const users = useAppSelector((state) => state.user.users)
  const loading = useAppSelector((state) => state.user.loading)
  const error = useAppSelector((state) => state.user.error)
  let count: number = 0
  users.map(() => count++)

  //Хорошая практика - использовать useEffect здесь.
  // useEffect(() => {
  //   dispatch(fetchUsers())

  //   // eslint-disable-next-line
  // }, [])

  return (
    <div className={styles.userList_wrapper}>
      <span className={styles.userList_title}>Список пользователей</span>
      <ul className={styles.userList_body}>
        {users.length ? (
          users.map((user) => <UserItem key={user.id} {...user} />)
        ) : (
          <p>{loading === 'pending' ? 'loading...' : error}</p>
        )}
      </ul>
      <span className={styles.userList_count}>
        Найдено {count} пользователей
      </span>
    </div>
  )
}

export default UserList
