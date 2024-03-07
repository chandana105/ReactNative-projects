import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// lets be very concious of passing only imageurl as a prop here only
const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

export default function App() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  // Optional configuration
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const rollDiceOnTop = () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }
    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Dice imageUrl={diceImage} />
      <View>
        <Text>hlo i am chandana</Text>
        <TouchableOpacity onPress={rollDiceOnTop}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>hi,Roll the dice</Text>
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
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#8B78E6',
    fontSize: 20,
    fontWeight: '500',
  },
});

// Haptic Feedback and Image

// TRIED :- EXPO FOR HAPTIC FEEDBACK CHECK , BUT FOR IT EXPO HAS ANOTHER PACKAGE
// https://docs.expo.dev/versions/latest/sdk/haptics/
// SO LEAVING THAT IMPLEMETATION, WILL WORK IN CONECTING MY DEVICE TO RECT NATIVE

// HERE I COVERED :- EXPO WORKING , HOW TO USE EXPO FOR IT
// https://chat.openai.com/share/ad140d4d-492e-4830-a7ff-d1f51c2aebcb

// so while cliking onroll the deivce, u ll feel vibrations
