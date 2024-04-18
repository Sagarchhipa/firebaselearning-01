import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ShowDetailsAction} from '../../Actions/ShowAction/ShowDetailsAction';
import UpdateDetails from './UpdateDetails';
import ShowDetaisText from './ShowDetaisText';

const ShowDetails = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userMobile, setUserMobile] = useState('');

  useEffect(() => {
    showDetailsData();
  }, []);
  
  const showDetailsData = async () => {
    const result = await ShowDetailsAction();
    setUsername(result.userData.username);
    setUserMail(result.userData.mail);
    setUserMobile(result.userData.phonoNo);
  };

  return (
    <View style={styles.constainer}>
      <View style={styles.constainer}>
        <ShowDetaisText
          username={username}
          userMail={userMail}
          userMobile={userMobile}
        />
        <UpdateDetails
          username={username}
          setUsername={setUsername}
          userMail={userMail}
          setUserMail={setUserMail}
          userMobile={userMobile}
          setUserMobile={setUserMobile}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default ShowDetails;

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    borderWidth: 2,
    width: 300,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  showBtn: {
    height: 40,
    width: 200,
    backgroundColor: 'green',
    marginTop: 8,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateContainer: {
    flex: 1,
  },
});
