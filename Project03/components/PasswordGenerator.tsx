import {
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

  //   now to generate the password using the inputs as what sohuld be the pass length and whether shoudl incue lowercase etc

  const generatePasswordString = (passwordLength: number) => {
    // eg:- pasword :- #1Aqwert%
    // need to generate this type of random password from given inputs sleected

    let charactersList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    // first we are selectign ki user ne kya select kiya hai :- uske based pr we are adding vlaues to characterslist

    if (upperCase) {
      charactersList += upperCaseChars;
    }
    if (lowerCase) {
      charactersList += lowerCaseChars;
    }
    if (numbers) {
      charactersList += digitChars;
    }
    if (symbols) {
      charactersList += specialChars;
    }
    // by default lowercase is true, but if user make it false , then make careteslist as lowercae and show chec k on leoercase
    if (!upperCase && !numbers && !symbols) {
      charactersList += lowerCaseChars;
      setLowerCase(true);
    }

    const passwordResult = createPassword(charactersList, passwordLength);
    // jo result return hokr aayega :- vo password hoga :- toh uso setPasswrod mein krna

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';

    // first lets find a random index by going thorgh loop paswordlength times
    // and then at every iteration , we ll get index and based on that idnex we will get the letter at the idnex and keeps on adding in the reuslt
    // jsut a random wahy of maing password

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);

      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setUpperCase(false);
    setLowerCase(true);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View>
      <Text style={styles.headingText}>Password Generator</Text>
      <Formik
        initialValues={{passwordLength: ''}}
        validationSchema={passwordValidationSchema}
        onSubmit={values => {
          console.log({values});
          //   values.passle is string so to convert into nubmer + or Number
          generatePasswordString(+values.passwordLength);
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
                  //   here handelChange is given as a hook fro mformik
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
                    resetPasswordState();
                  }}
                  style={[styles.button, styles.resetButton]}>
                  <Text style={styles.buttonText}> Reset</Text>
                </TouchableOpacity>
              </View>
              {isPasswordGenerated && (
                <View style={[styles.resultCard, styles.resultCardElevated]}>
                  <Text style={styles.subTitle}>Password Generated :</Text>
                  <Text style={styles.subTitle}>Long Press to copy</Text>

                  <Text
                    selectable={true}
                    numberOfLines={3}
                    style={styles.passwordResult}>
                    {password}
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
  resultCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#EAF0F1',
  },
  resultCardElevated: {
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#ccc',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  subTitle: {
    color: '#000',
    fontWeight: 'bold',
  },
  passwordResult: {
    color: '#000',
    fontSize: 24,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
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
