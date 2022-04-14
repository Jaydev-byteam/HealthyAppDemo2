import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from "../../_constants/FontConstants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleConstants.dark_background,
    paddingHorizontal: 15,
  },
  titleCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: styleConstants.card_sleep,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
  },
  goalHeadline: {
    flex: 1,
    justifyContent: 'center',
  },
  goalSubhead: {
    fontFamily: fontConstants.button,
    color: styleConstants.step_divider,
    fontSize: 14,
    textAlign: 'center',
  },
  goalAmount: {
    color: styleConstants.light_text,
    fontFamily: fontConstants.currentGoal,
    textAlign: 'center',
    fontSize: 30,
  },
  cardDivider: {
    height: '50%',
    borderRightWidth: 1,
    borderRightColor: styleConstants.dark_background,
  },
  centerSection: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
  },
  leftCard: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: styleConstants.card_sleep,
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginRight: 7.5,
  },
  leftCardTitle: {
    fontFamily: fontConstants.button,
    fontSize: 14,
    textAlign: 'center',
    color: styleConstants.light_text,
  },
  cardInfo: {
    width: 150,
    left: 0,
    bottom: 75,
    alignItems: 'center',
  },
  progressText: {
    fontFamily: fontConstants.currentGoal,
    fontSize: 26,
    color: styleConstants.light_text,
  },
  rightCard: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: styleConstants.card_sleep,
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginLeft: 7.5,
  },
  rightCardTitle: {
    fontFamily: fontConstants.button,
    fontSize: 14,
    textAlign: 'center',
    color: styleConstants.light_text,
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
  cardLogo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'contain',
  },
});
