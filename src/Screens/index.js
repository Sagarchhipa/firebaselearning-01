import {View, Platform, Alert, BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListInserting from './ListInserting/ListInserting';
import NetInfo from '@react-native-community/netinfo';

const ScreensHome = ({navigation}) => {
  const [checkConnection, setCheckConnection] = useState(true);
  useEffect(() => {
    checkConnectivity();
  }, []);

  const checkConnectivity = () => {
    if (Platform.OS === 'android') {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          setCheckConnection(true);
        } else if (!state.isConnected) {
          setCheckConnection(false);
        }
      });
      // NetInfo.getConnectionInfo().then((connectionInfo) => {
      //   console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
      // });
    }
  };
  return (
    <View style={{flex: 1}}>
      {checkConnection === true ? (
        <ListInserting navigation={navigation} />
      ) : (
        Alert.alert(
          'No Internet ?',
          'Check Your Internet Connection',
          [
            {
              text: 'Cancel',
              onPress: () => BackHandler.exitApp(),
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
            onDismiss: () => BackHandler.exitApp(),
          }
        )
      )}
    </View>
  );
};

export default ScreensHome;
