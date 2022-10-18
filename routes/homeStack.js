import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import 'react-native-gesture-handler';

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Verification from "../components/Verification";
import Home from "../components/Home";
import SurveyScreen from "../components/Home/screens/SurveyScreen";

const homeStack = createStackNavigator(
    {
        SignInScreen: {
          screen: SignIn,
          navigationOptions: {
            headerShown: null,
          },
        },
        SignUpScreen: {
          screen: SignUp,
          navigationOptions: {
            headerShown: null,
          },
        },
        VerificationScreen: {
          screen: Verification,
          navigationOptions: {
            headerShown: null,
          },
        },
        HomeScreen: {
          screen: Home,
          navigationOptions: {
            headerShown: null,
          },
        },
        SurveyScreen: {
          screen: SurveyScreen,
          navigationOptions: {
            headerShown: null,
          },
        },
        
      },
      {
        navigationOptions: {
          getSelection: false,
          headerVisible: false,
        },
        headerMode: 'screen',
      },
    );

export default createAppContainer(homeStack);