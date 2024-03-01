import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View style={styles.cardBox}>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.cardHeadingText}>
            What's New in Javascript21 ES12 ?
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_3840,q_auto',
            height: 200,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardDescription}>
          <Text style={styles.cardDescriptionText} numberOfLines={3}>
            JavaScript, often abbreviated as JS, is a programming language and
            core technology of the World Wide Web, alongside HTML and CSS. As of
            2024, 98.8% of websites use JavaScript on the client side for
            webpage behavior, often incorporating third-party libraries
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://reactnative.dev/docs/linking#openurl')
            }
            style={styles.socialLinkButton}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://reactnative.dev/docs/linking#openurl')
            }
            style={styles.socialLinkButton}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
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
    color: '#000',
  },
  card: {
    width: 350,
    height: 380,
    backgroundColor: '#000',
    borderRadius: 20,
    margin: 10,
  },
  cardElevated: {
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeadingText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  cardImage: {},
  cardDescription: {
    flex: 1,
    padding: 6,
  },
  cardDescriptionText: {
    color: '#fff',
    fontSize: 14,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 16,
  },
  socialLinkButton: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  socialLinks: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

// https://reactnative.dev/docs/linking

// Deep linking and touchable opactiy

// https://www.pexels.com/search/web%20development/ for images
