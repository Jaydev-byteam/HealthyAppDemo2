import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: styleConstants.light_background,
  },
  splashTitle: {
    fontFamily: fontConstants.title,
    fontSize: 42,
    color: styleConstants.dark_text,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 50,
  },
  subtitle: {
    fontFamily: fontConstants.subtext,
    fontSize: 18,
    color: styleConstants.splash_subhead,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    height: 227,
    width: 325,
    resizeMode: 'contain',
    marginVertical: 40,
  },
  loginButton: {
    backgroundColor: styleConstants.button_alt,
  },
});
