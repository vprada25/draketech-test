import { logger } from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import RootSaga from './Sagas'
import rootReducers from './Reducers'

const sagaMiddleware = createSagaMiddleware()

const Middlewares = () => {
  let middleware: any = [sagaMiddleware]
  if (true === true) middleware = [sagaMiddleware, logger]
  return middleware
}

const Store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: Middlewares(),
})

export default Store

sagaMiddleware.run(RootSaga)