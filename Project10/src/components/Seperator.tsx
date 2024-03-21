import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function Seperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    height: 0.8,
    backgroundColor: '#CAD5E2',
  },
});
