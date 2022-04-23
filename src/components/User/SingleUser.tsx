import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

import { editUser } from '../../store/slices/userSlice'

import { IPerson, keyType } from '../../types/userType'

import InputUser from './InputUser'
import Undefined from '../../pages/Undefined'

import styles from './User.module.scss'

const SingleUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const users = useAppSelector((state) => state.user.users)
  const user = users.find((user) => user.id?.toString() === params.id)

  const [isDisabled, setDisabled] = useState(true)

  const person: IPerson = {
    id: user?.id,
    name: user?.name,
    username: user?.username,
    email: user?.email,
    street: user?.address?.street,
    city: user?.address?.city,
    zip: user?.address?.zipcode,
    phone: user?.phone,
    website: user?.website,
    comment: '',
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    getValues,
    clearErrors,
  } = useForm({
    defaultValues: {
      id: user?.id,
      name: user?.name,
      username: user?.username,
      email: user?.email,
      street: user?.address?.street,
      city: user?.address?.city,
      zip: user?.address?.zipcode,
      phone: user?.phone,
      website: user?.website,
      comment: '',
      company: user?.company,
    } as IPerson,
  })

  const onSubmit = () => {
    const defaultUser = getValues()
    const { street, zip, city } = defaultUser

    const userToStandart = ({ street, zip, city, ...rest }: IPerson) => rest

    const userToDispatch = {
      ...userToStandart(defaultUser),
      address: {
        ...defaultUser.address,
        street,
        zipcode: zip,
        city,
      },
    }

    dispatch(editUser(userToDispatch))
    navigate('/')
  }

  return user ? (
    <div className={styles.singleUser_wrapper}>
      <div className={styles.singleUser_header}>
        <h1 className={styles.singleUser_title}>Профиль пользоваетля</h1>
        <button
          className={styles.singleUser_btn_edit}
          onClick={() => setDisabled((prev) => !prev)}>
          Редактировать
        </button>
      </div>
      <div className={styles.singleUser_body}>
        {person &&
          Object.keys(person).map((key) => (
            <InputUser
              register={register}
              key={key as keyof IPerson}
              inputValue={key as keyType}
              setValue={setValue}
              isDisabled={isDisabled}
              errors={errors}
              clearErrors={clearErrors}
            />
          ))}
      </div>
      <div className={styles.singleUser_btns}>
        <Link to='/' className={styles.singleUser_btn_back}>
          Назад
        </Link>
        <button
          disabled={isDisabled}
          type='submit'
          className={styles.singleUser_btn_submit}
          onClick={handleSubmit(onSubmit)}>
          Отправить
        </button>
      </div>
    </div>
  ) : (
    <Undefined />
  )
}

export default SingleUser
