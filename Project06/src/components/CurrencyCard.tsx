import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type CurrencyCardProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

export default function CurrencyCard(props: CurrencyCardProps): JSX.Element {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.flagImage}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
  },
  flagImage: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: '#2d3436',
  },
});
