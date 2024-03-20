import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

// LEARNIGN HERE HOW WE CAN SEND THE DATA (IE PROPS)
export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button
        title="Go to Details"
        // LEARNIGN HERE HOW WE CAN SEND THE DATA (IE PROPS)

        onPress={() =>
          navigation.navigate('Details', {
            productId: '65',
          })
        }
        // if no params
        // onPress={() =>
        //   navigation.navigate('Details')
        // }

        // if using push
        // onPress={() =>
        //   navigation.push('Details', {
        //     productId: '65',
        //   })
        // }
      />
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

// now for particalr screen props , we have props :-
/**
 * it is just type safety
 * and then we are addign home props :- which comes fro mnativestackscreenprosp and wht kind of props bringign in is rootstackprosp and bringing it home
 *
 * now as son as u route fro mscrrren , u et props and extractign ehre navigation rposp
 *
 * u can navigate to next scren usign vairty of methods :- eaxh metohd ahs prso and cons
 *alwayd  consider it as a stack as u keep on loading things if u use default one , there is replace : -which rpelaces the entire stack

 push is super easy, but it keeps on addign layers on it agai nand agian in staxk
 eg : - in isntagram we are keep on goign profielisntdie profiel : calback hell profiel ehell
 */
