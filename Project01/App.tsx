import React from 'react';

import {Alert, Button, SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Button
          title="Press Me"
          color="blue"
          onPress={() => Alert.alert('Button Pressed')}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
