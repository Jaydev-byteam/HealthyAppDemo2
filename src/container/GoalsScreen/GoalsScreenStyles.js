import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import { fontConstants } from "../../_constants/FontConstants";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '3%',
    backgroundColor: styleConstants.base_background,
  },
  subtitleText: {
    fontFamily: fontConstants.title,
    fontSize: 14,
    color: styleConstants.dark_text,
    textAlign: 'center',
  },
});
