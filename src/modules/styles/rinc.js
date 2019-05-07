import { StyleSheet } from 'react-native'
import IOS from '../assets/platform'

module.exports = StyleSheet.create({
  global:{ 
    flex: 1,
    alignItems: 'stretch'
  },
  full:{ flex: 1 },
  wFull:{ width: '100%' },
  hFull:{ height: '100%' },
  whFull:{ width: '100%', height: '100%' },
  stretchChild:{ alignItems: 'stretch' },
  white:{ color: '#fff' },
  bgWhite:{ backgroundColor: '#fff' },
  black:{ color: '#000' },
  bgBlack:{ backgroundColor: '#000' },
  light1:{ color: '#f7f8fa' },
  bgLight1:{ backgroundColor: '#f7f8fa' },
  light2:{ color: '#eeeff1' },
  bgLight2:{ backgroundColor: '#eeeff1' },
  light3:{ color: '#e8ebef' },
  bgLight3:{ backgroundColor: '#e8ebef' },
  light4:{ color: '#e1e2e3' },
  bgLight4:{ backgroundColor: '#e1e2e3' },
  light5:{ color: '#d4d7da' },
  bgLight5:{ backgroundColor: '#d4d7da' },
  grayLight:{ color: '#acb9c6' },
  bgGrayLight:{ backgroundColor: '#acb9c6' },
  grayMid:{ color: '#697989' },
  bgGrayMid:{ backgroundColor: '#697989' },
  grayDark:{ color: '#515860' },
  bgGrayDark:{ backgroundColor: '#515860' },
  green:{ color: '#1fc523' },
  bgGreen:{ backgroundColor: '#1fc523' },
  red:{ color: '#E94F4F' },
  bgRed:{ backgroundColor: '#E94F4F' },
  blue:{ color: '#3471c2' },
  bgBlue:{ backgroundColor: '#3471c2' },
  debug:{ backgroundColor: '#f9d7e1' },
  d:{ backgroundColor: '#C8CA2633' },
  f:{ backgroundColor: '#ff00aa33' },
  row:{ flexDirection: 'row' },
  rtl:{ flexDirection: 'row-reverse' },
  wrap:{ flexWrap: 'wrap' },
  fa:{ 
    fontFamily: 'IRANSansMobile'
  },
  faBold:{ 
    fontFamily: IOS ? 'IRANSansMobile-Bold' : 'IRANSansMobile_Bold',
  },
  en:{ 
    // fontFamily: 'ConcordW00-Light'
  },
  enBold:{ 
    // fontFamily: 'ConcordW00-Bold'
  },
  sub:{ 
    fontWeight: '100',
    fontSize: 10
  },
  lightFont: {
    fontWeight: '100'
  },
  largeText:{ fontSize: 16 },
  bigText:{ fontSize: 14 },
  midText:{ fontSize: 11 },
  tinyText:{ fontSize: 8 },
  text12:{ fontSize: 12 },
  overLine:{ textDecorationLine: 'line-through' },
  underLine:{ textDecorationLine: 'underline' },
  centerText:{ textAlign: 'center' },
  rightText:{ textAlign: 'right' },
  leftText:{ textAlign: 'left' },
  rtlText: { writingDirection: 'rtl' }, // ios
  ltrText: { writingDirection: 'ltr' }, // ios
  topText:{ textAlignVertical: 'top' }, // android
  middleText:{ textAlignVertical: 'center' }, //android
  padd0:{ padding: 0 },
  padd2:{ padding: 2 },
  padd3:{ padding: 3 },
  padd5:{ padding: 5 },
  padd7:{ padding: 7 },
  padd10:{ padding: 10 },
  padd15:{ padding: 15 },
  padd20:{ padding: 20 },
  padd30:{ padding: 30 },
  padd40:{ padding: 40 },
  margin2:{ margin: 2 },
  margin3:{ margin: 3 },
  margin5:{ margin: 5 },
  margin7:{ margin: 7 },
  margin10:{ margin: 10 },
  margin15:{ margin: 15 },
  margin20:{ margin: 20 },
  margin30:{ margin: 30 },
  margin40:{ margin: 40 },
  hP3:{ paddingHorizontal: 3 },
  hP5:{ paddingHorizontal: 5 },
  hP10:{ paddingHorizontal: 10 },
  hP15:{ paddingHorizontal: 15 },
  hP20:{ paddingHorizontal: 20 },
  hP30:{ paddingHorizontal: 30 },
  hP40:{ paddingHorizontal: 40 },
  vP3:{ paddingVertical: 3 },
  vP5:{ paddingVertical: 5 },
  vP10:{ paddingVertical: 10 },
  vP15:{ paddingVertical: 15 },
  vP20:{ paddingVertical: 20 },
  vP30:{ paddingVertical: 30 },
  vP40:{ paddingVertical: 40 },
  marginH3:{ marginHorizontal: 3 },
  hM5:{ marginHorizontal: 5 },
  hM10:{ marginHorizontal: 10 },
  hM15:{ marginHorizontal: 15 },
  hM20:{ marginHorizontal: 20 },
  hM30:{ marginHorizontal: 30 },
  hM40:{ marginHorizontal: 40 },
  vM3:{ marginVertical: 3 },
  vM5:{ marginVertical: 5 },
  vM10:{ marginVertical: 10 },
  vM15:{ marginVertical: 15 },
  vM20:{ marginVertical: 20 },
  vM30:{ marginVertical: 30 },
  vM40:{ marginVertical: 40 },
  rightP3:{ paddingRight: 3 },
  rightP5:{ paddingRight: 5 },
  rightP10:{ paddingRight: 10 },
  rightP15:{ paddingRight: 15 },
  rightP20:{ paddingRight: 20 },
  rightP30:{ paddingRight: 30 },
  rightP40:{ paddingRight: 40 },
  leftP3:{ paddingLeft: 3 },
  leftP5:{ paddingLeft: 5 },
  leftP10:{ paddingLeft: 10 },
  leftP15:{ paddingLeft: 15 },
  leftP20:{ paddingLeft: 20 },
  leftP30:{ paddingLeft: 30 },
  leftP40:{ paddingLeft: 40 },
  rightM2:{ marginRight: 2 },
  rightM3:{ marginRight: 3 },
  rightM5:{ marginRight: 5 },
  rightM10:{ marginRight: 10 },
  rightM15:{ marginRight: 15 },
  rightM20:{ marginRight: 20 },
  rightM30:{ marginRight: 30 },
  rightM40:{ marginRight: 40 },
  leftM2:{ marginLeft: 2 },
  leftM3:{ marginLeft: 3 },
  leftM5:{ marginLeft: 5 },
  leftM10:{ marginLeft: 10 },
  leftM15:{ marginLeft: 15 },
  leftM20:{ marginLeft: 20 },
  leftM30:{ marginLeft: 30 },
  leftM40:{ marginLeft: 40 },
  topP3:{ paddingTop: 3 },
  topP5:{ paddingTop: 5 },
  topP10:{ paddingTop: 10 },
  topP15:{ paddingTop: 15 },
  topP20:{ paddingTop: 20 },
  topP25:{ paddingTop: 25 },
  topP30:{ paddingTop: 30 },
  topP40:{ paddingTop: 40 },
  topM3:{ marginTop: 3 },
  topM5:{ marginTop: 5 },
  topM8:{ marginTop: 8 },
  topM10:{ marginTop: 10 },
  topM15:{ marginTop: 15 },
  topM20:{ marginTop: 20 },
  topM30:{ marginTop: 30 },
  topM40:{ marginTop: 40 },
  topM50:{ marginTop: 50 },
  topM60:{ marginTop: 60 },
  topM70:{ marginTop: 70 },
  topM80:{ marginTop: 80 },
  topM90:{ marginTop: 90 },
  topM100:{ marginTop: 100 },
  bottomP5:{ paddingBottom: 5 },
  bottomP10:{ paddingBottom: 10 },
  bottomP15:{ paddingBottom: 15 },
  bottomP20:{ paddingBottom: 20 },
  bottomP30:{ paddingBottom: 30 },
  bottomP40:{ paddingBottom: 40 },
  bottomP50:{ paddingBottom: 50 },
  bottomM5:{ marginBottom: 5 },
  bottomM10:{ marginBottom: 10 },
  bottomM20:{ marginBottom: 20 },
  bottomM30:{ marginBottom: 30 },
  bottomM40:{ marginBottom: 40 },
  bottomM50:{ marginBottom: 50 },
  bottomM70:{ marginBottom: 70 },
  center:{ 
    justifyContent: 'center',
    alignItems: 'center'
  },
  vCenter:{ justifyContent: 'center' },
  hCenter:{ alignItems: 'center' },
  selfCenter:{ alignSelf: 'center' },
  spaceAround:{ justifyContent: 'space-around' },
  spaceBetween:{ justifyContent: 'space-between' },
  rightItems:{ alignItems: 'flex-end' } ,
  leftItems:{ alignItems: 'flex-start' },
  line:{ 
    height: 1,
    backgroundColor: '#adb9c7'
  },
  absolute:{ position: 'absolute' },
  relative:{ position: 'relative' },
  top:{ top: 0 },
  left:{ left: 0 },
  bottom:{ bottom: 0 },
  right:{ right: 0 },
  image:{ 
    width: null, 
    height: null,
    flex: 1, 
    resizeMode: 'cover'
  },
  overhide:{ overflow: 'hidden' },
  rotate90:{ transform: [{ rotate: '90deg' }] },
  flipX:{ transform: [{ scaleX: -1 }] },
  round3:{ borderRadius: 3 },
  round5:{ borderRadius: 5 },
  round7:{ borderRadius: 7 },
  round10:{ borderRadius: 10 },
  round15:{ borderRadius: 15 },
  round20:{ borderRadius: 20 },
  round30:{ borderRadius: 30 },
  zIndex0:{ zIndex: 0 },
  zIndex1:{ zIndex: 1 },
  zIndex2:{ zIndex: 2 },
  zIndex3:{ zIndex: 3 },
  zIndex4:{ zIndex: 4 },
  zIndex5:{ zIndex: 5 },
  zIndex10:{ zIndex: 10 },
  map:{ 
    flex: 1,
    position: 'relative',
    top: 0, left: 0, right: 0, bottom: 0,
  },
  modal:{ 
    width: '90%',
    minHeight: 50,
    borderRadius: 3,
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 20,
    paddingHorizontal: 30
  },
  radioBTN:{ 
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#f6f6f6',
    borderWidth: 2,
    borderColor: '#12a1a1',
  },
  radioBTNActive:{ 
    width: 15,
    height: 15,
    backgroundColor: '#02938e',
    borderRadius: 10,
  },
  notification:{ 
    minHeight: 100,
    paddingTop: 25,
  },
  elevation1:{ elevation: 1 },   //Android
  elevation2:{ elevation: 2 },   //Android
  elevation3:{ elevation: 3 },   //Android
  elevation5:{ elevation: 5 },   //Android
  elevation8:{ elevation: 8 },   //Android
  elevation10:{ elevation: 10 },   //Android
  elevation15:{ elevation: 15 },   //Android
  elevation20:{ elevation: 20 },   //Android
  elevation30:{ elevation: 30 },   //Android
  shadow3: {   //multi platform
    elevation: 3, 
    shadowColor: '#000', 
    shadowRadius: 3, 
    shadowOpacity: 0.3, 
    shadowOffset: { width: 0, height: 3 },
  },
  shadow5: {   //multi platform
    elevation: 5, 
    shadowColor: '#000', 
    shadowRadius: 5, 
    shadowOpacity: 0.3, 
    shadowOffset: { width: 0, height: 5 }
  },
  shadow10: {   //multi platform
    elevation: 10, 
    shadowColor: '#000', 
    shadowRadius: 10, 
    shadowOpacity: 0.3, 
    shadowOffset: { width: 0, height: 5 }
  },
  shadow20: {   //multi platform
    elevation: 20, 
    shadowColor: '#000', 
    shadowRadius: 20, 
    shadowOpacity: 0.3, 
    shadowOffset: { width: 0, height: 5 }
  },
  i2: { width: '50%' },
  i3: { width: '33.3333%' },
  i4: { width: '25%' },
  i5: { width: '20%' },
  i6: { width: '16.666666%'},
  w98: { width: '98%' },
  w95: { width: '95%' },
  w90: { width: '90%' },
  w85: { width: '85%' },
  w80: { width: '80%' },
  w75: { width: '75%' },
  w70: { width: '70%' },
  w60: { width: '60%' },
  w50: { width: '50%' },
  borderTR3: {
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3
  },
  borderTR4: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4
  }

})











/**/
