import { createSlice } from '@reduxjs/toolkit'

import { loginFailedType, loginSuccessType, loginAction } from './type'


export const initialState = {
  message: '',
  token: '',
  user: '',
  authentication: false,
  error: false,
  success: false,
  loading: false,
}

const AuthSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    loginPending: (state, action: loginAction) => (
      {
        ...state,
        loading: true,
      }),
    loginSuccess: (state, action: loginSuccessType) => (
      {
        ...state,
        loading: false,
        success: true,
        authentication: true,
        token: action.payload.token,
        user: action.payload.user,
        message: 'Successful login',
      }),
    loginFailed: (state, action: loginFailedType) => (
      {
        ...state,
        loading: false,
        error: true,
        message: action.payload.error,
      }),
    logout: (state) => (
      {
        ...state,
        loading: false,
        authentication: false,
        token: '',
        user: '',
        message: 'Successful logout',
      }),
  },
})

const {reducer, actions} = AuthSlice

export const { loginPending, loginFailed, loginSuccess, logout } = actions

export default reducer




