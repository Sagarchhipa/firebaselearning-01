import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const InsertPageBtn = ({handleInsertDetails, handleShowDetails}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.insertBtn}
        onPress={() => handleInsertDetails()}>
        <Text style={styles.text}>Insert Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.showBtn}
        onPress={() => handleShowDetails()}>
        <Text style={styles.text}>Show Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InsertPageBtn;

const styles = StyleSheet.create({
  insertBtn: {
    height: 40,
    width: 200,
    backgroundColor: 'teal',
    marginTop: 8,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  showBtn: {
    height: 40,
    width: 200,
    backgroundColor: '#5D6D7E',
    marginTop: 8,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
