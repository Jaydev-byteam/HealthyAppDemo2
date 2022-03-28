import {StyleSheet} from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: styleConstants.background_color,
  },
  title: {
    color: styleConstants.light_text,
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 20,
  },
  editBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'none',
  },
  button: {
    backgroundColor: styleConstants.background_color,
  },
  note: {
    color: styleConstants.light_text,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
