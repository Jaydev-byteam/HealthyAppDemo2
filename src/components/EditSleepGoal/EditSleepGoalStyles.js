import {StyleSheet} from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  sleepEdit: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: styleConstants.light_background,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  editText: {
    color: styleConstants.subhead_text,
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
  },
  sleepGoal: {
    color: styleConstants.dark_background,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  minButton: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.card_sleep,
    height: 40,
    width: 40,
    borderRadius: 20,

  },
  addButton: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.dark_background,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  bedtimeButton: {
    borderRadius: 30,
    backgroundColor: styleConstants.card_sleep,
    padding: 15,
  },
  buttonTitle: {
    color: styleConstants.light_text,
    fontSize: 12,
    fontWeight: 'bold',
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
