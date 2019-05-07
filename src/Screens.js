/* eslint-disable */
import React from 'react'
import { Navigation } from 'react-native-navigation'
import { ReduxNetworkProvider } from 'react-native-offline'

import Home from "./modules/pages/home"
import Profile from "./modules/pages/profile"

export function registerScreens(store, Provider) {
  Navigation.registerComponent('Home', () => props => (
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  ), () => Home),
  Navigation.registerComponent('Profile', () => props => (
    <Provider store={store}>
      <Profile {...props} />
    </Provider>
  ), () => Profile)
}
