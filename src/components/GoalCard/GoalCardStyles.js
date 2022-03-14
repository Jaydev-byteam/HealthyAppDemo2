import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    height: 170,
    width: 160,
    marginBottom: 30,
  },
  graphic: {
    width: 160,
    left: 25,
  },
  logo: {
    // flex: 1,
    width: 90,
    height: 90,
    marginTop: 15,
    borderRadius: 45,
    resizeMode: 'contain',
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
    marginBottom: 0,
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
    top: 0,
  },
});
