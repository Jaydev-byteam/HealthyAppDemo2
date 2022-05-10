import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleConstants.base_background,
    paddingHorizontal: 15,
  },

  cardLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
    resizeMode: 'contain',
  },

  mainCard: {
    flex: 1,
    backgroundColor: styleConstants.light_background,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },

  goalQuery: {
    color: styleConstants.dashboard_subhead,
    fontFamily: fontConstants.title,
    textAlign: 'center',
    marginHorizontal: 30,
    marginVertical: 15,
    fontSize: 21,
  },
  goalAdjust: {
    flex: 1,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: styleConstants.light_background,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },

  minButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.progress_color,
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 50,
  },

  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.plus_button,
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 50,
  },
  stepsGoal: {
    color: styleConstants.progress_color,
    fontSize: 30,
    fontFamily: fontConstants.currentGoal,
    textAlign: 'center',
  },
  editText: {
    color: styleConstants.subhead_text,
    fontFamily: fontConstants.subtext,
    fontSize: 12,
    textAlign: 'center',
  },
  stepsGoalGraphic: {
    flex: 1,
    height: 200,
    padding: 10,
  },

  stepsImage: {
    flex: 1,
    height: 180,
    width: 317,
    resizeMode: 'contain',
  },

});
