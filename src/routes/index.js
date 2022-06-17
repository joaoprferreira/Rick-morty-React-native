import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#f4511e'},
        }}
        initialRouteName="Home">
        <Stack.Screen
          options={() => ({
            headerShown: false,
            headerTransparent: true,
          })}
          screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
