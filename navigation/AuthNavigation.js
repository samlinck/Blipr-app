import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

// Routes for authentication screens Login and Register
const AuthNavigation = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)
export default AuthNavigation