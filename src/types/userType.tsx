export interface IUser {
  name?: string
  id?: number | string
  username?: string
  email?: string
  address?: {
    street?: string
    city?: string
    zipcode?: string
  }
  phone?: string
  website?: string
  company?: {
    name: string
    catchPhrase?: string
    bs?: string
  }
}

export interface IPerson extends IUser {
  street: string | undefined
  city: string | undefined
  zip: string | undefined
  comment: string | undefined
}

export type keyType =
  | 'email'
  | 'name'
  | 'address'
  | 'id'
  | 'username'
  | 'phone'
  | 'website'
  | 'company'
  | 'street'
  | 'city'
  | 'zip'
  | 'comment'
