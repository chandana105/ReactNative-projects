import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.cardBox}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.cardContainer, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg',
            height: 200,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
            Built from red and pink sandstone, it is on the edge of the City
            Palace, Jaipur, and extends to the Zenana, or women's chambers.
          </Text>
          <Text style={styles.cardFooter}>12 kms away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  cardContainer: {
    width: 350,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 10,
  },
  //   can choose cardElevated property for puttings shadows etc
  cardElevated: {
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#ccc',
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  cardImage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    padding: 16,
    paddingHorizontal: 8,
    paddingVertical: 5,
    gap: 8,
  },
  cardTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardLabel: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardDescription: {
    color: '#2F363F',
    flexShrink: 1,
    fontSize: 14,
  },
  cardFooter: {
    color: '#000',
    fontWeight: '600',
  },
});

// flex grow and flex shrink : see
// but card size isdiff on ios and driod due to hieght
