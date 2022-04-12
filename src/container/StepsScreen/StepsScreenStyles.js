import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleConstants.base_background,
    paddingHorizontal: 15,
  },
  titleCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: styleConstants.light_background,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },

  cardLogo: {
    width: 70,
    height: 70,
    margin: 20,
    borderRadius: 35,
    resizeMode: 'contain',
  },
  goalHeadline: {
    justifyContent: 'center',
  },
  goalSubhead: {
    fontFamily: fontConstants.subtext,
    color: styleConstants.subhead_text,
  },
  goalAmount: {
    color: styleConstants.progress_color,
    fontFamily: fontConstants.currentGoal,
    textAlign: 'center',
    fontSize: 30,
  },
  centerSection: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
  },
  leftCard: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: styleConstants.light_background,
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginRight: 7.5,
  },
  leftCardTitle: {
    fontFamily: fontConstants.button,
    fontSize: 14,
    textAlign: 'center',
  },
  cardInfo: {
    width: 150,
    left: 0,
    bottom: 80,
    alignItems: 'center',
  },
  progressText: {
    fontFamily: fontConstants.currentGoal,
    fontSize: 26,
    color: styleConstants.dark_text,
  },

  rightCard: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: styleConstants.card_secondary,
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginLeft: 7.5,
  },
  rightCardTitle: {
    fontFamily: fontConstants.button,
    fontSize: 14,
    color: styleConstants.light_text,
    textAlign: 'center',
  },
  rightInfo: {
    marginTop: 20,
  },
  rightCardSubhead: {
    fontFamily: fontConstants.subtext,
    color: styleConstants.light_text,
    textAlign: 'center',
  },
  weeklyAverage: {
    fontFamily: fontConstants.currentGoal,
    fontSize: 32,
    color: styleConstants.light_text,
  },
  progress: {
    flex: 1,
    height: 130,
    width: 130,
    top: 16,
  },
});
