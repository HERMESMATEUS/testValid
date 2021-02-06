import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Gettopartists from '@screens/gettopartists';
import GettopartistsDescription from '@screens/gettopartistsDescription';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gettopartists" component={Gettopartists} />
        <Stack.Screen name="GettopartistsDescription" component={GettopartistsDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
