import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
// import { getData } from '../../lib/api/fetchData'

import { IFetchUser, IUser } from '../../types/userType'

export interface UserState {
  users: IUser[]
}

const initialState: UserState = {
  users: [],
}

// export const fetchUsers = createAsyncThunk('user/fetchUser', async (data) => {
//   console.log(data)

//   return data
//   // const response = await getData()
//   // return response
// })

export const fetchUsers = createAsyncThunk(
  'user/fetchUser',
  (data: IFetchUser[]) => {
    return data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUser(state, action: PayloadAction<IUser>) {
      const user = state.users.find((user) => user.id === action.payload.id)
      console.log(user)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {})
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {})
  },
})

export const {} = userSlice.actions

export default userSlice.reducer
