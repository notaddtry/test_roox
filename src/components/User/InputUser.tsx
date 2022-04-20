import React from 'react'
import { IUser } from '../../types/userType'

interface IInputUserProps extends IUser {
  value:
    | string
    | {
        street?: string | undefined
        city?: string | undefined
        zipcode?: string | undefined
      }
    | {
        name: string
        catchPhrase?: string | undefined
        bs?: string | undefined
      }
    | undefined
}

const InputUser: React.FC<IInputUserProps> = (props) => {
  console.log(props)

  if (typeof props.value === 'string' || typeof props.value === 'number') {
    return <input type='text' placeholder={props.value} />
  } else if (typeof props.value === 'object') {
    if ('name' in props.value) {
      return <input type='text' placeholder={props.value.name} />
    } else {
      return <input type='text' placeholder={props.value.city} />
    }
  }
  return <></>
}

export default InputUser
