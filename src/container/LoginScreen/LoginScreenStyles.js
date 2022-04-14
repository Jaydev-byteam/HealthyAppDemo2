import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleConstants.base_background,
  },
  input: {
    height: 48,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: styleConstants.input_background,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  footerText: {
    fontSize: 16,
    color: styleConstants.subhead_text,
    fontFamily: fontConstants.button,
  },
  footerLink: {
    color: styleConstants.blue_text,
    fontFamily: fontConstants.button,
    fontSize: 16,
  },
});
