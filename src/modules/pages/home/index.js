import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-animatable'
import { Navigation } from "react-native-navigation"
import { Text, Icon } from '../../components/font'
import Loading from '../../components/loading'
import Tabbar from '../../components/tabbar'
import HomeHead from '../../components/homeHead'
import * as r from '../../styles/rinc'
import * as g from '../../styles/general'
import * as s from './style'

class Home extends Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
  }

  // action = () => {
  //   Navigation.setStackRoot(this.props.componentId, {
  //       component: {
  //         name: 'Page01'
  //       }
  //   })
  // }

  render() {
    return (
      <View style={[r.full]}>
      <HomeHead />
        <View style={[r.full, r.center, r.wrap]}>
          
          <View style={[]}></View>

        </View>
        <Tabbar componentId={this.props.componentId} active={'home'} />
      </View>
    )
  }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
export default connect(mapStateToProps, mapDispatchToProps)(Home)
