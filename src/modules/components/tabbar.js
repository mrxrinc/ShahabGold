import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Navigation } from "react-native-navigation"
import { Text, Icon } from './font'
import r from '../styles/rinc'
import g from '../styles/general'

export default class Tabbar extends Component {

  activeIcon(active) {
    switch(active) {
      case 'home':
        return this.props.active === 'home' ? true : false
      case 'search':
        return this.props.active === 'search' ? true : false
      case 'profile':
        return this.props.active === 'profile' ? true : false
      case 'cart':
        return this.props.active === 'cart' ? true : false
      default:
        return false
    }
  }

  action = route => {
    Navigation.setStackRoot(this.props.componentId, {
        component: {
          name: route
        }
    })
  }

  render() {
    return (
      <View style={[s.wrapper, r.row, r.wFull, r.spaceAround]}>

        <Button
          onPress={() => this.action('Home')}
          icon={this.activeIcon('home') ? 'home-active': 'home'}
          iconStyle={this.activeIcon('home') ? g.primary : g.gray1}
        />

        <Button
          onPress={() => this.action('Search')}
          icon={this.activeIcon('search') ? 'search-active': 'search'}
          iconStyle={this.activeIcon('search') ? g.primary : g.gray1}
        />

        <Button
          onPress={() => this.action('Profile')}
          icon={this.activeIcon('profile') ? 'profile-active': 'profile'}
          iconStyle={this.activeIcon('profile') ? g.primary : g.gray1}
          count={null}
        />

        <Button
          onPress={() => this.action('Cart')}
          icon={this.activeIcon('cart') ? 'cart-active': 'cart'}
          iconStyle={this.activeIcon('cart') ? g.primary : g.gray1}
          count={3}
        />

      </View>
    )
  }
}

const Button = props => (
  <TouchableOpacity style={[r.center, s.button]} onPress={props.onPress}>
    <Icon name={props.icon} size={20} style={props.iconStyle} />
    {props.count && (
      <View 
        style={[s.counter, r.absolute, g.bgPrimary, r.center, r.hP3, {
          minWidth: 18, height: 18, right: 5, bottom: 6 }
      ]}>
        <Text
          size={13}
          height={12}
          lineHeight={19}
          includefontPadding={false}
          bold
          style={[r.centerText, r.white, { writingDirection: 'ltr', lineHeight: 16 }]}
        >
          {props.count}
        </Text>
      </View>
    )}
  </TouchableOpacity>
)

const s = StyleSheet.create({
  wrapper: {
    height: 50,
    borderTopWidth: 0.5,
    borderColor: '#b3b3b3'
  },
  button: {
    width: 50
  }
})
