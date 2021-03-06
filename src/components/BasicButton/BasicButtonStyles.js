import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  defaultButton: {
    backgroundColor: styleConstants.button_background,
    marginLeft: 15,
    marginRight: 15,
    marginVertical: 20,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: styleConstants.light_text,
    fontSize: 18,
    fontFamily: fontConstants.button,
  },
  altTitle: {
    color: styleConstants.dark_text,
    fontSize: 18,
    fontFamily: fontConstants.button,
  },
  sleepButton: {
    backgroundColor: styleConstants.card_sleep,
    marginLeft: 15,
    marginRight: 15,
    marginVertical: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  altButton: {
    backgroundColor: styleConstants.button_alt,
    marginLeft: 15,
    marginRight: 15,
    marginVertical: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
