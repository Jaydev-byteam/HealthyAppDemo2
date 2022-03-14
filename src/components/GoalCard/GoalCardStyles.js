import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    // flex: 1,
    // alignItems: 'center',
    height: 170,
    width: 160,
  },
  graphic: {
    width: 160,
    left: 25,
  },
  logo: {
    // flex: 1,
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'contain',
  },
  logoButton: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 55,
    // backgroundColor: 'white',
    position: 'absolute',
    left: 10,
    top: 10,
  },
  cardInfo: {
    position: 'absolute',
    width: 160,
    left: 0,
    bottom: 0,
    alignItems: 'center',
  },
  goalTitle: {
    color: 'white',
    marginVertical: 6,
    fontWeight: 'bold',
  },
  goalAmount: {
    color: '#b690d4',
    fontWeight: 'bold',
  },
  progress: {
    height: 120,
    width: 120,
    position: 'absolute',
    left: 0,
    alignSelf: 'center',
    top: 0,
  },
});
