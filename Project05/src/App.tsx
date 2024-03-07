import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import DiceOne from '../assets/One.png';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={DiceOne} style={styles.diceImage} />
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Roll the dice</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  btn: {
    backgroundColor: '#8B78E6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
});
