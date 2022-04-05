import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleConstants.background_color,
  },
  goalAmount: {
    color: styleConstants.subhead_text,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 6,
  },
  dailySleep: {
    color: styleConstants.light_text,
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
    borderRadius: 60,
    resizeMode: 'contain',
  },
});
