import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListInserting from '../Screens/ListInserting/ListInserting';
import ShowDetails from '../Screens/ShowDetais/ShowDetails';
import ScreensHome from '../Screens';
const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={ScreensHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="insert"
          component={ListInserting}
          options={{headerShown: false}}
        />
        <Stack.Screen name="show" component={ShowDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
