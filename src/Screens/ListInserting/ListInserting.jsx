import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {InsertAction} from '../../Actions/InsertAction/InsertAction';
import InsertDataInDB from './InsertDataInDB';
import InsertPageBtn from './InsertPageBtn';

const ListInserting = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const handleInsertDetails = () => {
    const path = `/users/`;
    const result = InsertAction(path, name, email, mobile, error);
    if (result === 'success') {
      setName('');
      setEmail('');
      setMobile('');
      setError('');
      Alert.alert('Data Inserted Successfully');
    } else if (result === 'fail') {
      setError('Please fill all fields');
    } else if (result === 'failed') {
      Alert.alert('Failed to inset data');
    }
  };
  const handleShowDetails = () => {
    navigation.navigate('show');
  };

  return (
    <View style={styles.container}>
      <InsertDataInDB
        name={name}
        email={email}
        mobile={mobile}
        setName={setName}
        setEmail={setEmail}
        setMobile={setMobile}
        setError={setError}
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      <InsertPageBtn
        handleShowDetails={handleShowDetails}
        handleInsertDetails={handleInsertDetails}
      />
    </View>
  );
};

export default ListInserting;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
});
