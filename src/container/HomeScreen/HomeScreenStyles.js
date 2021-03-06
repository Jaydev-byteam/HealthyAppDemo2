import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: '3%',
    backgroundColor: styleConstants.base_background,
  },

  accountInfo: {
    color: styleConstants.blue_text,
    fontSize: 18,
    fontFamily: fontConstants.subtext,
    marginBottom: 140,
    textAlign: 'center',
  },
});
