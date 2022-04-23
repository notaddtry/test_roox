import React from 'react'
import {
  FieldErrors,
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'

import { IPerson, IUser, keyType } from '../../types/userType'

import styles from './User.module.scss'

interface IInputUserProps extends IUser {
  register: UseFormRegister<IPerson>
  inputValue: keyType
  setValue: UseFormSetValue<IPerson>
  isDisabled: boolean
  errors: FieldErrors<IPerson>
  clearErrors: UseFormClearErrors<IPerson>
}

const InputUser: React.FC<IInputUserProps> = (props) => {
  const { register, inputValue, setValue, isDisabled, errors, clearErrors } =
    props

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    type: typeof inputValue
  ) => {
    errors[type] && clearErrors(type)
    setValue(type, e.target.value)
  }

  return inputValue !== 'id' ? (
    <div className={styles.userInput_wrapper}>
      {inputValue !== 'comment' ? (
        <>
          <label htmlFor={inputValue} className={styles.userInput_label}>
            {inputValue}
          </label>
          <input
            className={
              errors[inputValue]
                ? styles.userInput_input_error
                : styles.userInput_input
            }
            id={inputValue}
            disabled={isDisabled}
            {...register(inputValue, { required: true })}
            type='text'
            onChange={(e) => handleChange(e, inputValue)}
          />
        </>
      ) : inputValue === 'comment' ? (
        <>
          <label htmlFor={inputValue} className={styles.userInput_label}>
            {inputValue}
          </label>
          <textarea
            className={styles.userInput_textarea}
            id={inputValue}
            disabled={isDisabled}
            onChange={(e) => handleChange(e, inputValue)}></textarea>
        </>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <></>
  )
}

export default InputUser
