import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';

const App = () => {
  console.log('HEY APP');
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView>
        <PasswordGenerator />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;
