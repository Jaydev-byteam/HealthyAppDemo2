import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleConstants.base_background,
    paddingHorizontal: 15,
  },

  permissions: {
    marginVertical: 150,
    fontFamily: fontConstants.title,
    fontSize: 24,
    color: styleConstants.dark_text,
    textAlign: 'center',
  },
});
