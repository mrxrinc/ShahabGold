import { Navigation } from "react-native-navigation"
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native'
import { registerScreens } from './Screens'
import configureStore from './store/configureStore'
import {name as appName} from '../app.json'

const store = configureStore()
registerScreens(store, Provider)

AppRegistry.registerComponent(appName, () => App)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true
    },
    layout: {
      orientation: ['portrait'],
      backgroundColor: 'white'
    }
  })
  
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Splash"
            }
          }
        ]
      }
    }
  })
})

