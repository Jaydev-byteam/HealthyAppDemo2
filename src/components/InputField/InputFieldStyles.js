import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  input: {
    height: 48,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: fontConstants.input,
    overflow: 'hidden',
    color: styleConstants.input_color,
    backgroundColor: styleConstants.input_background,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 16,
  },
});
