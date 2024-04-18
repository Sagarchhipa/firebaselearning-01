import database from '@react-native-firebase/database';

// let data = []
// export const ShowDetailsAction = async () => {
// return database()
//     .ref(`/users`)
//     .once('value')
//     .then(async snapshot => {
//       return await snapshot.val();
//     });
// };

export const ShowDetailsAction = async () => {
  let snapshot = await database().ref(`/users`).once('value');
  return await snapshot.val();
};
