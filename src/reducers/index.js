import * as TYPE from '../constants'
import initialState from './initialState'

export const test = (state = initialState.test, { type }) => {
  if (type === 'TEST') return 'I am from redux'
  return 'Im initial but from initial state not any action'
}

export const update = (state = initialState.update, { type, payload }) => {
  if (type === TYPE.UPDATE) return payload
  return state
}

export const loading = (state = initialState.loading, { type }) => {
  switch(type) {
    case 'LOADING_START': return true
    case 'LOADING_END' : return false
    default: return state
  }
}

export const loadingII = (state = initialState.loadingII, { type }) => {
  switch(type) {
    case 'LOADING_II_START': return true
    case 'LOADING_II_END' : return false
    default: return state
  }
}

export const notification = (state = initialState.notification, { type, payload }) => {
  switch (type) {
    case TYPE.SHOW_NOTIFICATION:
      return {...payload, visible: true }
    case TYPE.HIDE_NOTIFICATION:
      return { visible: false, title: null, message: null, type: null }
    default:
      return state
  }
}

export const empty = (state = initialState.empty, { type, payload }) => {
  switch (type) {
    case TYPE.SHOW_EMPTY:
      const newData = {
        visible: true,
        icon: payload.icon ? payload.icon : 'page-2',
        text: payload.text ? payload.text : 'نتیجه ای یافت نشد!'
      }
      return newData
    case TYPE.HIDE_EMPTY:
      return { 
        visible: false, 
        icon: 'page-2', 
        text: 'نتیجه ای یافت نشد!' 
      }
    default:
      return state
  }
}

export const user = (state = initialState.user, { type, payload }) => {
  if(type === TYPE.STORE_USER) return payload
  return state
}

export const forgetPassword = (state = initialState.forgetPassword, { type, payload }) => {
  if(type === TYPE.FORGET_PASSWORD) return payload
  return state
}

