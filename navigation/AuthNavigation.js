import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from '../screens/LoadingScreen'
import TutorialScreen1 from '../screens/TutorialScreen1'
import TutorialScreen2 from '../screens/TutorialScreen2'
import TutorialScreen3 from '../screens/TutorialScreen3'
import TutorialScreen4 from '../screens/TutorialScreen4'
import TutorialScreen5 from '../screens/TutorialScreen5'
import TutorialScreen6 from '../screens/TutorialScreen6'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

// Routes for authentication screens Login and Register
const AuthNavigation = createStackNavigator(
  {
    Loading: { screen: LoadingScreen},
    Tutorial1: { screen: TutorialScreen1},
    Tutorial2: { screen: TutorialScreen2},
    Tutorial3: { screen: TutorialScreen3},
    Tutorial4: { screen: TutorialScreen4},
    Tutorial5: { screen: TutorialScreen5},
    Tutorial6: { screen: TutorialScreen6},
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen }
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
  }
)
export default AuthNavigation