import { StyleSheet } from 'react-native'
import IOS from '../assets/platform'
import { window } from '../assets'

module.exports = StyleSheet.create({
  primary: { color: '#000' },
  bgPrimary: { backgroundColor: '#000' },
  green: { color: '#54c96e' },
  bgGreen: { backgroundColor: '#54c96e' },
  red: { color: '#ff5254' },
  bgRed: { backgroundColor: '#ff5254' },
  gray1: { color: '#a2a2a2'},
  gray2: { color: '#b3b3b3'},
  round: { borderRadius: 3 },
  safeBottom: { height: 90 },

  line: {
    height: 1,
    backgroundColor: '#e8ebef'
  },
  
  modal: {
    width: '100%',
    margin: 0,
    marginTop: 100
  },
})
