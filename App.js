/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {Home, ParkingLot,OrderTrade,Ranking} from './screens/index';
import Tabs from "./navigation/btbs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer style={{backgroundColor:'black'}}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Parking" component={ParkingLot} />
          <Stack.Screen name="Order" component={OrderTrade} />
          <Stack.Screen name="User" component={Ranking} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
