import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';

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
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
  },
  stepsGoal: {
    color: styleConstants.progress_color,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  editBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'none',
  },
  minusButton: {
    backgroundColor: styleConstants.progress_color,
    borderRadius: 20,
  },
  plusButton: {
    backgroundColor: styleConstants.plus_button,
  },
  note: {
    color: styleConstants.light_text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: styleConstants.step_divider,
    color: styleConstants.progress_color,
  },
});
