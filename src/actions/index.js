import { offlineActionTypes } from 'react-native-offline'
import * as TYPE from "../constants"

export const test = () => ({ type: TYPE.TEST })

export const update = payload => ({ 
  type: TYPE.UPDATE,
  payload
})

export const loadingStart = () => ({ type: TYPE.LOADING_START })

export const loadingEnd = () => ({ type: TYPE.LOADING_END })

export const loadingIIStart = () => ({ type: TYPE.LOADING_II_START })

export const loadingIIEnd = () => ({ type: TYPE.LOADING_II_END })

export const internetChecker = isConnected => ({
  type: offlineActionTypes.CONNECTION_CHANGE,
  payload: isConnected
})

export const storeUser = payload => ({
  type: TYPE.STORE_USER,
  payload
})

export const forgetPassword = payload => ({
  type: TYPE.FORGET_PASSWORD,
  payload
})

export const showNotification = payload => ({
  type: TYPE.SHOW_NOTIFICATION,
  payload
})

export const hideNotification = () => ({ type: TYPE.HIDE_NOTIFICATION })

export const showEmpty = payload => ({
  type: TYPE.SHOW_EMPTY,
  payload
})

export const hideEmpty = () => ({ type: TYPE.HIDE_EMPTY })



