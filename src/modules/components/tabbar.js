import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Text, Icon } from './font'
import r from '../styles/rinc'
import g from '../styles/general'
import { Navigation } from 'react-native-navigation';

export default class Tabbar extends Component {

  color(active) {
    switch(active) {
      case 'home':
        return this.props.active === 'home' ? r.primary : g.gray1
      case 'search':
        return this.props.active === 'search' ? r.primary : g.gray1
      case 'profile':
        return this.props.active === 'profile' ? r.primary : g.gray1
      case 'cart':
        return this.props.active === 'cart' ? r.primary : g.gray1
      default:
        return g.gray1
    }
  }

  render() {
    return (
      <View style={[s.wrapper, r.row, r.wFull, r.spaceAround]}>

        <Button
          onPress={this.props.action}
          icon={'home'}
          iconStyle={r.grayMid}
        />

        <Button 
          style={[r.center, r.f]}
          onPress={this.props.action}
        >
          <Icon name={'search'} size={17} style={this.color('home')} />
        </Button>

        <Button 
          style={[r.center]}
          onPress={this.props.action}
        >
          <Icon name={'profile'} size={17} style={this.color('home')} />
        </Button>

        <Button 
          style={[r.center]}
          onPress={this.props.action}
        >
          <Icon name={'cart'} size={17} style={this.color('home')} />
        </Button>


      </View>
    )
  }
}

const Button = props => (
  <TouchableOpacity style={[r.center, s.button, r.f]} onPress={props.onPress}>
    <Icon name={props.icon} size={20} style={props.iconStyle} />
    <View 
      style={[s.counter, r.absolute, g.bgPrimary, r.center, r.hP3, {
        minWidth: 18, height: 18, right: 5, bottom: 6 }
    ]}>
      <Text
        size={13}
        height={12}
        lineHeight={19}
        includefontPadding={false}
        style={[r.centerText, r.white, { writingDirection: 'ltr', lineHeight: 16 }]}
      >
        3
      </Text>
    </View>
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








        {/* <Button 
          style={[r.center]}
          androidStyle={[r.full]}
          ripple={'#ffffff11'}
          expandableRipple
          onPress={
            this.props.active !== 'more' ? () => {
              this.props.navigator.push({
                screen: 'More',
                animationType: 'fade'
              })
            } : this.props.childOfMore ? () => { // now the childs of 'More' will pop back on 'More' tab press
              this.props.navigator.pop()
            } : null
          }
        >
          <View>
            <Icon name={'more'} size={30} style={[this.color('more')]}/>
            <Text size={12} height={22} lineHeight={23} style={[r.centerText, r.white, r.topM5]}>
              بیشتر
            </Text>

            {this.props.notificationCount && ( // make it null if there is no count number
              <View 
                style={[r.absolute, g.bgRedLight, r.round20, r.center, {
                  minWidth: 20, height: 20, right: -12, top: -3 }
                ]}
              >
                <Text
                  size={13}
                  height={12}
                  lineHeight={19}
                  includefontPadding={false}
                  style={[r.centerText, r.white, { writingDirection: 'ltr' }]}
                >
                  {this.props.notificationCount}
                </Text>
              </View>
            )}
          </View>

        </Button> */}