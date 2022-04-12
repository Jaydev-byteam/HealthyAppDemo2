import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

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
    fontFamily: fontConstants.subtext,
    fontSize: 12,
    textAlign: 'center',
  },
  sleepGoal: {
    color: styleConstants.dark_background,
    fontSize: 30,
    fontFamily: fontConstants.currentGoal,
    textAlign: 'center',
  },
  minButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.card_sleep,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  addButton: {
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
    fontFamily: fontConstants.button,
  },
  datePicker: {
    backgroundColor: styleConstants.light_background,
    width: 300,
  },
  timePicker: {
    alignItems: 'center',
    marginTop: 10,
  },
});
