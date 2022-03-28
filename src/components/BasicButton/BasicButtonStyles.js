import {StyleSheet} from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  button: {
    backgroundColor: styleConstants.button_background,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 20,
    height: 48,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: styleConstants.light_text,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
