import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
import {Provider} from 'react-redux';
import appStore from './appStore/appStore';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string}; //not using here product : whole prodcut
};

// video using Product type for Details : {product : Product}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={appStore}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Trending Products',
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: 'Product Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

// https://reactnavigation.org/docs/params#what-should-be-in-params
