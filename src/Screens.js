/* eslint-disable */
import React from 'react'
import { Navigation } from 'react-native-navigation'
import { ReduxNetworkProvider } from 'react-native-offline'

import Home from "./modules/pages/home"

export function registerScreens(store, Provider) {
  Navigation.registerComponent('Home', () => props => (
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  ), () => Home)
}
