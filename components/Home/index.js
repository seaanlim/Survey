import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SurveyScreen from './screens/SurveyScreen';
import SurveyDoneScreen from './screens/SurveyDoneScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function Home (){
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Homes"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === "Home") {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === "Details") {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (rn === "Profile") {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } 
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          showLabel: true,
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: 'black',
          activeTintColor: "#0782f9",
          inactiveTintColor: 'grey',
          labelStyle: { fontSize: 10},
          
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />

      </Tab.Navigator>
      </NavigationContainer>
  );
}

function HomeStackScreen() {
  return (
   
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Survey" component={SurveyScreen} />
      <HomeStack.Screen name="SurveyDone" component={SurveyDoneScreen} />
    </HomeStack.Navigator>
   
  );
}

export default Home;
