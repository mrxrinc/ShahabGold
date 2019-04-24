import React, {Component} from 'react';
import { Navigation } from "react-native-navigation";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {

  press = () => {
    console.log('___________ back pressed!!')
    Navigation.pop(this.props.componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.press}>
          <Text style={styles.welcome}>Page02</Text>
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
  }
});
