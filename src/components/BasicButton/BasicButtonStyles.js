import {StyleSheet} from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  defaultButton: {
    backgroundColor: styleConstants.progress_color,
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
  sleepButton: {
    backgroundColor: styleConstants.progress_color,
    marginLeft: 15,
    marginRight: 15,
    marginVertical: 20,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
