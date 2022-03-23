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
    marginVertical: 5,
  },
  bedtime: {
    color: styleConstants.light_text,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
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
  datePicker: {
    backgroundColor: styleConstants.light_background,
    width: 300,
  },
  timePicker: {
    marginTop: 30,
    borderRadius: 20,
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
