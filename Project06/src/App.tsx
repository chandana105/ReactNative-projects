import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {currencyByRupee} from '../constants';
import CurrencyCard from './components/CurrencyCard';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.textSymbol}>₹</Text>
        <TextInput
          numberOfLines={1}
          placeholder="Enter amount in rupees"
          style={styles.textInput}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Text style={styles.resultText}>Result</Text>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable style={[styles.button]}>
              <CurrencyCard {...item} />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 90,
    marginTop: 20,
    width: 200,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  textSymbol: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    padding: 10,
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
  resultText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    justifyContent: 'space-evenly',
    width: 110,
    backgroundColor: '#fff',
    paddingVertical: 10,
    margin: 5,
    borderRadius: 10,
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

/**
 *
 *  input taken for entering input in ruppes rs1
 *  below that result of comnversion $1
 *  lst of countiresd with thier flag , to which ndeed conversion and shown pressed
 *
 *
 * flatliat mein humne render krne ek component :- jo ki pressable hoga and uske andar img and then text hoga
 * lets get the data kya hoga
 */
