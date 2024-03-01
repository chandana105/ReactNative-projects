import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.content}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.content}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.content}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.content}>Red</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    gap: 12,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  content: {
    color: '#fff',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});

// view is a div in mob

// as the card increases flat cards gets squezed up

// so thats why we ll see now how to elevate them in elevatedcardds with scrolview on cards
