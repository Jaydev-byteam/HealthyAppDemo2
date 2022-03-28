import {StyleSheet} from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: styleConstants.background_color,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: styleConstants.input_background,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  accountInfo: {
    color: styleConstants.light_text,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
});
