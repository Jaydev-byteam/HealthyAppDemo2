import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  deleteButton: {
    backgroundColor: styleConstants.card_sleep,
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
});
