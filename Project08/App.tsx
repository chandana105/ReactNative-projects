import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <View>
      <Text>App</Text>
      <Icon name="logout" color="#fd0" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({});
