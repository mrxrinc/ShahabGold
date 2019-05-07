import { StyleSheet } from 'react-native'
import IOS from '../assets/platform'
import { window } from '../assets'

export const pallete = {
  primary: '#000',
  green: '#54c96e',
  red: '#ff5254',
  gray1: '#a2a2a2',
  gray2: '#b3b3b3',
  gray3: '#cccccc',
  gray4: '#f2f2f2',
  dark1: '#575b66'
}


export default StyleSheet.create({
  primary: { color: pallete.primary },
  bgPrimary: { backgroundColor: pallete.primary },
  green: { color: pallete.green },
  bgGreen: { backgroundColor: pallete.green },
  red: { color: pallete.red },
  bgRed: { backgroundColor: pallete.red },
  gray1: { color: pallete.gray1},
  bgGray1: { backgroundColor: pallete.gray1 },
  gray2: { color: pallete.gray2},
  bgGray2: { backgroundColor: pallete.gray2 },
  gray3: { color: pallete.gray3},
  bgGray3: { backgroundColor: pallete.gray3 },
  gray4: { color: pallete.gray4},
  bgGray4: { backgroundColor: pallete.gray4 },
  dark1: { color: pallete.dark1 },
  bgDark1: { backgroundColor: pallete.dark1 },
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
