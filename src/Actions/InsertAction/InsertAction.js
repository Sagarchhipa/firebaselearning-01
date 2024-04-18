import database from '@react-native-firebase/database';

export const InsertAction = (path, name, email, mobile, error) => {
  try {
    if (path && name != '' && email != '' && mobile != '' && error === '') {
      database()
        .ref(path)
        .set({
          userData: {
            username: name,
            mail: email,
            phonoNo: mobile,
          },
        })
        return 'success';
    } else {
      return 'fail';
    }
  } catch (error) {
    return 'failed';
  }
};
