export interface IFetchUser {
  id: string
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface IUser {
  name?: string
  id?: string
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
