import React, {Component} from 'react';
import { Navigation } from "react-native-navigation";
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
// import { withNetworkConnectivity } from 'react-native-offline'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontIconConfig from './modules/assets/iconsConfig.json'
const FontIcon = createIconSetFromFontello(fontIconConfig)
import LinearGradient from 'react-native-linear-gradient'
// import { ReduxNetworkProvider } from 'react-native-offline'
import { Text } from './modules/components/font'

import { test } from './actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }

  componentDidMount = () => {
    this.props.testAction
  }

  press = () => {
    console.log('___________pressed!!')
    console.log('_______PROPS-----', this.props)
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Page02'
      }
    });
  }

   render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.press}>
            <Text style={styles.welcome}>Page01</Text>
            <FontIcon name={"search"} size={50}/>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    // fontFamily: 'IRANSansMobile',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  linearGradient: {
    width: 150,
    height: 80,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})

const mapStateToProps = state =>  ({ state })
const mapDispatchToProps = dispatch => ({ testAction: dispatch(test()) })
// App = withNetworkConnectivity({ withRedux: true })(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)