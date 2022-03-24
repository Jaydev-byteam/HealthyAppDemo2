import {fstore, fire_auth} from "./FirebaseDefault";


const addUserToFirestore = (data) => {
  const usersRef = fstore.collection('users');
  usersRef
    .doc(data.uid)
    .set(data)
    .then(() => {

    })
}




const createNewUser = (email, password, nickname) => {

  fire_auth
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      const data = {
        id: response.user.id,
        email,
        nickname,
      };
    })
    .catch(error => {
      console.log('In createNewUser error in creation:', error);
    });


}
