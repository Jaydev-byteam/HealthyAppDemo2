import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    // alignItems: 'center',
    height: 170,
    width: 160,


  },
  graphic: {
    width: 160,
    left: 25,

  },
  logo: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'contain',
  },
  logoButton: {
    // flex: 1,
    alignItems: 'center',
    height: 110,
    width: 110,
    borderRadius: 55,
    // borderColor: 'white',
    // borderWidth: 2,
    position: 'absolute',
    left: 0,
    top: 0,
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
    height: 110,
    width: 110,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
