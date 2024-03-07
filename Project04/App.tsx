import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

// here to change entire backoround of the app

export default function App() {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#000000');

  const colorGenerator = () => {
    const hexRange = '0123456789ABCDEF';

    // to create color :- #ffffff

    let color = '#';
    for (let i = 0; i < 6; i++) {
      const colorIndex = Math.floor(Math.random() * hexRange.length);

      color += hexRange[colorIndex];
      console.log({color});
    }
    setRandomBackgroundColor(color);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={randomBackgroundColor} />
      <View
        style={[styles.container, {backgroundColor: randomBackgroundColor}]}>
        <TouchableOpacity onPress={colorGenerator}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BB2CD9',
  },
  actionBtnText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 24,
  },
});

// can have made different shapes like circle and square and trianle and on press me , background  is gettign changed
