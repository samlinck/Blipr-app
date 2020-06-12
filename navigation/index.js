import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'

// Make it possible to switch between navigations, initialized with AuthNavigation (before we are logged in)!
const SwitchNavigator = createSwitchNavigator(
    {
      Auth: AuthNavigation,
      App: AppNavigation,
    },
    {
      // Start with AuthNavigation
      initialRouteName: 'Auth'
    }
  )

// Accepts parameters in SwitchNavigator as either 'Auth' or 'App' so we can switch navigation (routing).
const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer