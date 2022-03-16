import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#550096',
  },

  goalAmount: {
    color: '#b690d4',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 6,
  },
  dailySleep: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    height: 200,
    width: 200,
    marginVertical: 20,
  },
  progress: {
    height: 160,
    width: 160,
    position: 'absolute',
    top: 0,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
    // marginLeft: 20,
    borderRadius: 60,
    resizeMode: 'contain',
  },

});
