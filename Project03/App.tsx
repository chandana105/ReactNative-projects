import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <PasswordGenerator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
