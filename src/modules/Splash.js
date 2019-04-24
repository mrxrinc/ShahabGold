import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-animatable'
import { Navigation } from "react-native-navigation"
import { navigatorStyle } from './assets'
import { Text, Icon } from './components/font'
import Loading from './components/loading'
import Tabbar from './components/tabbar'
import * as r from './styles/rinc'
import * as g from './styles/general'
import API from './utils/service'

class Splash extends Component {
  static navigatorStyle = navigatorStyle
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
  }

  action = () => {
    Navigation.setStackRoot(this.props.componentId, {
        component: {
          name: 'Page01'
        }
    })
  }

  render() {
    return (
      <View style={[r.full]}>
        <View style={[r.full, r.center]}>
          <Text>Splash</Text>
        </View>
        <Tabbar action={this.action} />
      </View>
    )
  }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
export default connect(mapStateToProps, mapDispatchToProps)(Splash)
