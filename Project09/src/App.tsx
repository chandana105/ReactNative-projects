import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home Screen'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Trending Products'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;

// https://reactnavigation.org/docs/typescript/
// https://reactnavigation.org/docs/stack-actions/
// https://reactnavigation.org/docs/navigation-lifecycle

/**
 * we ll do nth in index.js , will do in app.js :- a its routing
 * in home : we aresayign we are not accepting any params and in detaisl :- accpeting proedcutid : string
 * then we ll create a stack :- using createstacknavigatior fxn
 * likewise for everytihng ,drawer etc :- we ll be usng there respective fxns
 *  and as i move ot another screens and these screens accept some data to be pased on it and vo data rootstackpramlist tpyes ka hoga
 *
 * we dont ned any safearevidew : coz this app is not repsonibe lfor throwing u to any scree nnow
 * naviation  is repsonsible for it
 * navcontainer and insdie it we ll use stack or drawer based on wht type of navigatio nwe are usng
 *
 * we are usng native stack
 */
