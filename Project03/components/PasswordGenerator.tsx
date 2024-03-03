import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function PasswordGenerator() {
  const passwordValidationSchema = Yup.object({
    passwordLength: Yup.number()
      .required('Password length is required')
      .min(4, 'Password length should be atleast of 4 characters')
      .max(8, 'Password length should not exceed 8 characters'),
  });
  return (
    <View>
      <Text style={styles.headingText}>Password Generator</Text>
      <Formik
        initialValues={{passwordLength: ''}}
        validationSchema={passwordValidationSchema}
        onSubmit={values => {
          console.log({values});
        }}>
        {({values, errors, touched, handleChange, handleSubmit}) => (
          <View style={styles.container}>
            <View style={styles.rowContainer}>
              <Text style={styles.inputHeading}>Password Length</Text>
              {errors.passwordLength && touched.passwordLength && (
                <Text>{errors.passwordLength}</Text>
              )}
              <TextInput
                onChangeText={handleChange('passwordLength')}
                value={values.passwordLength}
                placeholder="Ex. 3"
                style={styles.textInput}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.heading}>Include numeric numbers</Text>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                // iconStyle={{borderColor: 'red'}}
                // innerIconStyle={{borderWidth: 2}}
                // textStyle={{fontFamily: 'JosefinSans-Regular'}}
                onPress={(isChecked: boolean) => {}}
              />
            </View>
            <View style={[styles.rowContainer, styles.buttonContainer]}>
              <Button onPress={() => handleSubmit} title="Generate Password" />
              <Button onPress={() => handleSubmit} title="Reset" />
            </View>
            <View style={styles.resultContainer}>
              <Text numberOfLines={3} style={styles.passwordResult}>
                result
              </Text>
            </View>
          </View>
        )}
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
  buttonContainer: {
    justifyContent: 'space-evenly',
  },

  inputHeading: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
  textInput: {
    borderColor: '#000',
    color: '#000',
    borderWidth: 2,
    padding: 10,
  },
  heading: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
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
