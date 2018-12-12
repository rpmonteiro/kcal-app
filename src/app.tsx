import { HomeScreen } from 'screens/home'
import { createNavigationContainer, createBottomTabNavigator } from 'react-navigation'
import React from 'react'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SettingsScreen } from 'screens/settings'

const AppNavigator = createBottomTabNavigator({
  home: HomeScreen,
  settings: SettingsScreen
})

const Navigator = createNavigationContainer(AppNavigator)

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    )
  }
}
