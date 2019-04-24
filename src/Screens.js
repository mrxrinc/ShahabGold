/* eslint-disable */
import React from 'react'
import { Navigation } from 'react-native-navigation'
import { ReduxNetworkProvider } from 'react-native-offline'

import App from "./App"
import App02 from "./App02"
import Splash from "./modules/Splash"

export function registerScreens(store, Provider) {
  Navigation.registerComponent('Page01', () => props => (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  ), () => App),
  Navigation.registerComponent('Page02', () => props => (
    <Provider store={store}>
      <App02 {...props} />
    </Provider>
  ), () => App02),
  Navigation.registerComponent('Splash', () => props => (
    <Provider store={store}>
      <Splash {...props} />
    </Provider>
  ), () => Splash)
}
