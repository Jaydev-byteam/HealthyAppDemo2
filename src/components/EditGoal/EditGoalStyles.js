import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: styleConstants.light_background,
    borderRadius: 10,
    padding: 10,
  },
  editText: {
    color: styleConstants.subhead_text,
    fontFamily: fontConstants.subtext,
    fontSize: 12,
    textAlign: 'center',
  },
  stepsGoal: {
    color: styleConstants.progress_color,
    fontSize: 30,
    fontFamily: fontConstants.currentGoal,
    textAlign: 'center',
  },
  minButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.progress_color,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.plus_button,
    height: 40,
    width: 40,
    borderRadius: 20,
  },

  submitButton: {
    backgroundColor: styleConstants.step_divider,
    color: styleConstants.progress_color,
  },
});
