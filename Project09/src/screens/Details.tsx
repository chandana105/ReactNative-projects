import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

// LEARNIGN HERE HOW WE CAN RECEIVE THE DATA (IE PROPS)

export default function Details({route}: DetailsProps) {
  const {productId} = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details : {productId}</Text>
      <Button
        title="Go to Home"
        // onPress={() => navigation.navigate('Home')}

        onPress={() => navigation.goBack()}
      />

      <Button
        title="Go back to First Screen"
        // onPress={() => navigation.pop(1)}

        onPress={() => navigation.popToTop()}
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

/**
 * data comes in route props
 * in ogback :- it jsut goes one screen back : -not to particualrly home
 */
