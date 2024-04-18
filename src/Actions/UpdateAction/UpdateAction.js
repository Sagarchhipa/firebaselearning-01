import database from '@react-native-firebase/database';

export const UpdateAction = (path, name, email, mobile, error) => {
  try {
    if (path && error === '') {
      database()
        .ref(path)
        .update({
          userData: {
            username: name,
            mail: email,
            phonoNo: mobile,
          },
        });
      return 'success';
    } else {
      return 'fail';
    }
  } catch (error) {
    return 'failed';
  }
};
