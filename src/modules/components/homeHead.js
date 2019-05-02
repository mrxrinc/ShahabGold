import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from './font'
import r from '../styles/rinc'
import g from '../styles/general'

export default HomeHead = () => (
  <View style={[s.wrapper, r.wFull, r.bgWhite, r.center]}>
    <Icon name={'shahab-gold'} style={[g.primary]} />
  </View>
)

const s = StyleSheet.create({
  wrapper: {
    height: 60,
    paddingTop: 25,
    borderBottomWidth: 0.5,
    borderColor: '#b3b3b3'
  }
})
