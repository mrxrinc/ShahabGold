import { combineReducers } from 'redux'
import { reducer as network } from 'react-native-offline'
import {
  test,
  update,
  loading,
  loadingII,
  user,
  forgetPassword,
  notification,
  empty
} from './index'

const rootReducer = combineReducers({
  test,
  update,
  loading,
  loadingII,
  user,
  forgetPassword,
  network,
  notification,
  empty
})

export default rootReducer
