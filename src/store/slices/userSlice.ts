import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getData } from '../../lib/api/fetchData'

import { IUser } from '../../types/userType'

export interface UserState {
  users: IUser[]
  loading: 'idle' | 'fulfilled' | 'rejected' | 'pending'
  error: string | null | undefined
}

const initialState: UserState = {
  users: [],
  loading: 'idle',
  error: null,
}

export const fetchUsers = createAsyncThunk(
  'user/fetchUser',
  async (_, { rejectWithValue }) => {
    const data = await getData(10)
    try {
      if (!data) {
        throw new Error('Server error')
      }
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUser(state, action: PayloadAction<IUser>) {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return (user = action.payload)
        } else {
          return user
        }
      })
    },
    sortUser(state, action: PayloadAction<'company' | 'city'>) {
      action.payload === 'company'
        ? state.users.sort(function (firstUser, secondUser) {
            if (firstUser.company?.name! > secondUser.company?.name!) {
              return 1
            } else if (firstUser.company?.name! < secondUser.company?.name!) {
              return -1
            } else {
              return 0
            }
          })
        : state.users.sort(function (firstUser, secondUser) {
            if (firstUser.address?.city! > secondUser.address?.city!) {
              return 1
            } else if (firstUser.address?.city! < secondUser.address?.city!) {
              return -1
            } else {
              return 0
            }
          })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = 'pending'
      state.error = null
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = 'fulfilled'
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = 'rejected'
      state.error = action.error.message
    })
  },
})

export const { editUser, sortUser } = userSlice.actions

export default userSlice.reducer
