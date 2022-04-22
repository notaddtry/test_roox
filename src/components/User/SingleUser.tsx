import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Undefined from '../../pages/Undefined'
import { useAppSelector } from '../../store/hooks'
import { editUser } from '../../store/slices/userSlice'
import { IPerson, keyType } from '../../types/userType'
import InputUser from './InputUser'

type functionType = {
  street: string
  city: string
  zipcode: string
}

const SingleUser = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const users = useAppSelector((state) => state.user.users)
  const user = users.find((user) => user.id?.toString() === params.id)

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
    formState: { errors, dirtyFields },
    handleSubmit,
    register,
    setValue,
    getValues,
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
    } as IPerson,
  })

  const onSubmit = () => {
    const defaultUser = getValues()
    const { street, zip, city } = defaultUser

    const userToStandart = ({ street, zip, city, ...rest }: IPerson) => rest

    const userToDispatch = {
      ...userToStandart(defaultUser),
      address: {
        street,
        zip,
        city,
      },
    }

    dispatch(editUser(userToDispatch))
  }
  const handleError = () => {
    console.log(errors)
    console.log(getValues())
  }

  return user ? (
    <div className='singleUser_wrapper'>
      <div className='singleUser_header'>
        <h1 className='singleUser_title'>Профиль пользоваетля</h1>
        <button className='singleUser_btn-edit'>Редактировать</button>
      </div>
      <div className='singleUser_body'>
        {person &&
          Object.keys(person).map((key) => (
            <InputUser
              register={register}
              key={key as keyof IPerson}
              inputValue={key as keyType}
              setValue={setValue}
            />
          ))}
      </div>
      <div className='singleUser_btns'>
        <Link to='/' className='singleUser_btn-back'>
          Назад
        </Link>
        <button onClick={handleError}>Errors</button>
        <button
          className='singleUser_btn-submit'
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
