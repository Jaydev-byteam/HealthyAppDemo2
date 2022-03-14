import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'contain',
  },
  logoButton: {
    flex: 1,
    alignItems: 'center',
    height: 96,
    width: 96,
    borderRadius: 48,
    borderColor: 'white',
    borderWidth: 2,
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
  },
});
