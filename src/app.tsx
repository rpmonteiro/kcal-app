import { HomeScreen } from 'screens/home'
import { createNavigationContainer, createBottomTabNavigator } from 'react-navigation'
import React from 'react'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SettingsScreen } from 'screens/settings'
import { GoalsScreen } from 'screens/goals'
import { persistStore } from 'redux-persist'

const AppNavigator = createBottomTabNavigator({
  home: HomeScreen,
  goals: GoalsScreen,
  settings: SettingsScreen
})

const Navigator = createNavigationContainer(AppNavigator)

export class App extends React.Component<{}, {}> {
  componentWillMount() {
    persistStore(store).purge()
  }

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
