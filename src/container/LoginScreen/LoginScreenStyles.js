import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleConstants.base_background,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: styleConstants.input_background,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  passwordInput: {
    marginLeft: 0,
  },
  eyeButton: {
    marginRight: 10,
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
