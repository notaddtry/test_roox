import React from 'react'
import { Link } from 'react-router-dom'

import { IUser } from '../../types/userType'

import styles from './User.module.scss'

interface IUserItemProps extends IUser {}

const UserItem: React.FC<IUserItemProps> = ({ name, id, address, company }) => {
  return (
    <div className={styles.userItem_wrapper}>
      <div className={styles.userItem_body}>
        <span>
          <span className={styles.userItem_light}>ФИО:</span>
          {name}
        </span>
        <br />
        <span>
          <span className={styles.userItem_light}>Город:</span>
          {address?.city}
        </span>
        <br />
        <span>
          <span className={styles.userItem_light}>Компания:</span>
          {company?.name}
        </span>
      </div>
      <Link to={`/user/${id}`} className={styles.userItem_btn}>
        Подробнее
      </Link>
    </div>
  )
}

export default UserItem
