import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordValidationSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .required('Password length is required')
    .min(8, 'Password length should be atleast of 8 characters')
    .max(16, 'Password length should be max 16 characters'),
});

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  console.log({symbols});

  return (
    <View>
      <Text style={styles.headingText}>Password Generator</Text>
      <Formik
        initialValues={{passwordLength: ''}}
        validationSchema={passwordValidationSchema}
        onSubmit={values => {
          console.log({values});
        }}>
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleSubmit,
          handleReset,
          handleBlur,
        }) => {
          console.log({values, errors, touched, isValid});

          return (
            <View style={styles.container}>
              <View style={styles.rowContainer}>
                <View style={styles.passwordLabelContainer}>
                  <Text style={styles.inputHeading}>Password Length</Text>
                  {/* if input of passlength is touched and havign error */}
                  {/* TODO:TOUCHED NOT WORKING  */}
                  {errors.passwordLength && (
                    <Text style={styles.errorMessage}>
                      {errors.passwordLength}
                    </Text>
                  )}
                </View>
                <TextInput
                  style={styles.textInput}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  placeholder="Ex. 3"
                  keyboardType="numeric"
                  onBlur={handleBlur('passwordLength')}
                />
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.heading}>Include Lowercase Letters</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={lowerCase}
                  size={25}
                  fillColor="red"
                  unfillColor="#FFFFFF"
                  // on press of it we just to toggle the state
                  onPress={() => setLowerCase(!lowerCase)}
                />
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.heading}>Include Uppercase Letters</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={upperCase}
                  size={25}
                  fillColor="green"
                  unfillColor="#FFFFFF"
                  onPress={() => setUpperCase(!upperCase)}
                />
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.heading}>Include Numbers</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={numbers}
                  size={25}
                  fillColor="blue"
                  unfillColor="#FFFFFF"
                  onPress={() => setNumbers(!numbers)}
                />
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.heading}>Include Symbols</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={symbols}
                  size={25}
                  fillColor="purple"
                  unfillColor="#FFFFFF"
                  onPress={() => setSymbols(!symbols)}
                />
              </View>
              <View style={[styles.rowContainer, styles.buttonContainer]}>
                <TouchableOpacity
                  disabled={!isValid} //disabled={true}
                  onPress={() => {
                    handleSubmit();
                  }}
                  style={[
                    styles.button,
                    styles.generatePasswordButton,
                    !isValid && styles.disabledButton,
                  ]}>
                  <Text style={styles.buttonText}>Generate Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleReset();
                    //   plus if u are having more than thre buttons can have ur own fxns like here having more inoput things
                    // TODO: FNX
                  }}
                  style={[styles.button, styles.resetButton]}>
                  <Text style={styles.buttonText}> Reset</Text>
                </TouchableOpacity>
              </View>
              {isPasswordGenerated && (
                <View style={styles.resultContainer}>
                  <Text numberOfLines={3} style={styles.passwordResult}>
                    result
                  </Text>
                </View>
              )}
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    padding: 13,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  passwordLabelContainer: {
    flex: 1, // Set your desired width here
    gap: 7,
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
  },

  inputHeading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  errorMessage: {
    color: '#f00',
  },
  textInput: {
    borderColor: '#000',
    color: '#000',
    borderWidth: 2,
    padding: 10,
    width: 60,
    textAlign: 'center',
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: '500',
  },
  generatePasswordButton: {
    backgroundColor: '#0df',
  },
  resetButton: {
    backgroundColor: '#0ef',
  },
  disabledButton: {
    opacity: 0.5,
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 12,
  },
  passwordResult: {
    backgroundColor: '#fd0',
  },
});

// pehle humne password genrator heaidng bnani
// then ek input ena hai passord lenght :- jo ki number hona chaiye ehle bs itna with formik and yup

// ypu has a lot of objects in it yup.object() and then u define the shape of the object
// and in the shape u can ask whether u are validating strings or not
//  and def ur properties

// whenver u want to change sth on the screen (or update on the screen)
// u need to tell the screen that i have updated these values of these leemvets on screen, so u go and re-redner tohse elemts : its dont by usestate

/**
 * always treats these states as variables 
  const [lowerCase, setLowerCase] = useState(false);
 * lowercase is just a variable and setLowerCase is a method to change that var's vlaue
 */
