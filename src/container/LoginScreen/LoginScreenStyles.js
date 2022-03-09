import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#550096',
  },
  // title: {
  //   flex: 1,
  //   alignItems: 'center',
  //   padding: 20,
  // },
  // titleText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: 'green',
  // },
  logo: {
    flex: 1,
    height: 90,
    width: 90,
    alignSelf: 'center',
    margin: 10,
  },
  input: {
    height: 48,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#998896',
    marginLeft: 60,
    marginRight: 60,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#b690d4',
    fontWeight: 'bold'
  },
  footerLink: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
