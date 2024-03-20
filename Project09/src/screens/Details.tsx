import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    color: '#000',
  },
});