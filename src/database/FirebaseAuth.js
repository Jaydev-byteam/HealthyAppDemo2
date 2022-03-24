import {fstore, fire_auth} from './FirebaseDefault';

const addUserToFirestore = data => {
  fstore
    .collection('users')
    .doc(data.uid)
    .set(data)
    .then(() => {
      console.log('New user added to firestore with email:', data.email);
    })
    .catch(error => {
      console.log('Error adding new user to firestore:', error);
    });
};

export const createNewUser = (email, password, nickname) => {
  fire_auth
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      const data = {
        id: response.user.uid,
        email,
        nickname,
      };
      addUserToFirestore(data);
    })
    .catch(error => {
      console.log('In createNewUser error in creation:', error);
    });
};
