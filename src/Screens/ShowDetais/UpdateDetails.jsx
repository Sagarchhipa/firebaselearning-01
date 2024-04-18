import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {UpdateAction} from '../../Actions/UpdateAction/UpdateAction';

const UpdateDetails = ({
  username,
  setUsername,
  userMail,
  setUserMail,
  userMobile,
  setUserMobile,
  navigation,
}) => {
  const loading = false;
  const [error, setError] = useState('');
  const pattern = new RegExp(/^\d{1,10}$/);
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleUpdateDetails = async () => {
    const path = `/users/`;
    const result = UpdateAction(path, username, userMail, userMobile, error);
    if (result === 'success') {
      Alert.alert('details update successfuly');
      navigation.replace('insert');
    } else if (result === 'fail') {
      setError('Please fill the fields');
    } else if (result === 'failed') {
      Alert.alert('Failed to update data');
    }
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.updateText}>UpdateDetails</Text>
      {loading === false ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="your Name"
            style={styles.textInput}
            numberOfLines={1}
          />
          <TextInput
            value={userMail}
            onChangeText={value => {
              if (!reg.test(value)) {
                setError('not valid email');
              } else if (reg.test(value)) {
                setError('');
              }
              setUserMail(value);
            }}
            placeholder="e-mail"
            style={styles.textInput}
            numberOfLines={1}
          />
          <TextInput
            value={userMobile}
            onChangeText={value => {
              setUserMobile(value);
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
          {error && <Text style={styles.errorMessage}>{error}</Text>}
          <TouchableOpacity
            style={styles.insertBtn}
            onPress={handleUpdateDetails}>
            <Text>Update Details</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ActivityIndicator size={'large'} color={'black'} />
      )}
    </View>
  );
};

export default UpdateDetails;
const styles = StyleSheet.create({
  updateText: {
    marginTop: 5,
  },
  textInput: {
    borderWidth: 2,
    width: 300,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  insertBtn: {
    height: 40,
    width: 200,
    backgroundColor: 'red',
    marginTop: 12,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
});
