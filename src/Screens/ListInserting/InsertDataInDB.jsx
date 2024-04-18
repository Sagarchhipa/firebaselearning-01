import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';

const InsertDataInDB = ({
  name,
  email,
  mobile,
  setName,
  setEmail,
  setMobile,
  setError,
}) => {
  const pattern = new RegExp(/^\d{1,10}$/);
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="your Name"
        style={styles.textInput}
        numberOfLines={1}
      />
      <TextInput
        value={email}
        onChangeText={value => {
          if (!reg.test(value)) {
            setError('not valid email');
          } else if (reg.test(value)) {
            setError('');
          }
          setEmail(value);
        }}
        placeholder="e-mail"
        style={styles.textInput}
        numberOfLines={1}
      />
      <TextInput
        value={mobile}
        onChangeText={value => {
          setMobile(value);
          if (!pattern.test(value) || value.length != 10) {
            setError('not valid mobile no');
          } else if (pattern.test(value) && value.length === 10) {
            setError('');
          }
        }}
        placeholder="mobile no"
        style={styles.textInput}
        keyboardType="number-pad"
        numberOfLines={1}
      />
    </View>
  );
};

export default InsertDataInDB;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    width: 300,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});
