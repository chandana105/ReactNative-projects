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

  const rollDiceOnTop = () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        return;
      case 2:
        setDiceImage(DiceTwo);
        return;
      case 3:
        setDiceImage(DiceThree);
        return;
      case 4:
        setDiceImage(DiceFour);
        return;
      case 5:
        setDiceImage(DiceFive);
        return;
      case 6:
        setDiceImage(DiceSix);
        return;

      default:
        setDiceImage(DiceOne);
        return;
    }
  };

  console.log('hlo');

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
