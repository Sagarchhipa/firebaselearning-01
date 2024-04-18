import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ShowDetaisText = props => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>Details</Text>
      <View style={styles.subcontainer1}>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.text}>Mobile No</Text>
      </View>
      <View style={styles.subcontainer1}>
        <Text style={styles.text1}>{props.username}</Text>
        <Text style={styles.text1}>{props.userMail}</Text>
        <Text style={styles.text1}>{props.userMobile}</Text>
      </View>
    </View>
  );
};

export default ShowDetaisText;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer1: {
    flexDirection: 'row',
    marginTop: 5,
  },
  text: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  text1: {
    flex: 1,
    textAlign: 'center',
  },
});
