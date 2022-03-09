import { put, takeLatest, all } from 'redux-saga/effects'

import { loginPending, loginSuccess, loginFailed } from './authSlice'
import { loginAction } from './type'

import { message } from 'antd'
import { DB_USERS } from '../../helpers/dummy/users'

function* fakeLogin({ payload }: loginAction) {
  const validUser = DB_USERS.find(
    e => e.email === payload.email && e.password === payload.password
  )
  if (validUser) {
    message.success('Successfully logged ')
    yield put(
      loginSuccess({ token: validUser.token, user: validUser.name })
    )
  } else {
    message.error('Error logging ')
    yield put(
      loginFailed({ error: 'Error' })
    )
  }
}

function* Observable() {
  yield takeLatest(loginPending, fakeLogin)
}

export default function* AuthSaga() {
  yield all([Observable()])
}