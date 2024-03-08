import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {currencyByRupee} from '../constants';
import CurrencyCard from './components/CurrencyCard';
import Snackbar from 'react-native-snackbar';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  // console.log({inputValue});

  const handleCurrencyButtonPressed = (targetValue: Currency) => {
    // console.log(targetValue);
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#ea7773',
        textColor: '#000',
      });
    }

    const inputAmount = parseFloat(inputValue);

    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const resultValue = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResult(resultValue);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'NOT a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.textSymbol}>₹</Text>
        <TextInput
          maxLength={14} //only upto 14 digits can be entered
          placeholder="Enter amount in rupees"
          style={styles.textInput}
          keyboardType="number-pad"
          clearButtonMode="always" //always , showing cross sign beside input to clear input
          value={inputValue}
          onChangeText={setInputValue}
        />
      </View>
      {result && (
        <View>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
              style={[
                styles.button,
                targetCurrency === item.name && styles.selected,
              ]}
              onPress={() => handleCurrencyButtonPressed(item)}>
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
    marginHorizontal: 70,
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  textSymbol: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 16,
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
