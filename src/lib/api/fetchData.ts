import axios from 'axios'

export const getData = async (limit?: number) => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const res = await axios(`${url}${limit ? `?_limit=${limit}` : ''}`)

  return res.data
}
