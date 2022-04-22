import React from 'react'
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { IPerson, IUser, keyType } from '../../types/userType'

interface IInputUserProps extends IUser {
  register: UseFormRegister<IPerson>
  inputValue: keyType
  setValue: UseFormSetValue<IPerson>
}

const InputUser: React.FC<IInputUserProps> = (props) => {
  const { register, inputValue, setValue } = props

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    type: typeof inputValue
  ) => {
    setValue(type, e.target.value)
  }
  console.log(inputValue)

  return inputValue !== 'comment' ? (
    <input
      {...register(inputValue, { required: true })}
      type='text'
      onChange={(e) => handleChange(e, inputValue)}
    />
  ) : (
    <textarea onChange={(e) => handleChange(e, inputValue)}></textarea>
  )
}

export default InputUser
