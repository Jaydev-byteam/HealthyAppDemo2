import {StyleSheet} from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  button: {
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
    fontWeight: 'bold',
  },
});
