import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 30,
  },
  stepCard: {
    backgroundColor: styleConstants.card_primary,
  },
  sleepCard: {
    backgroundColor: styleConstants.card_sleep,
  },
  cardInfo: {
    width: 150,
    left: 0,
    bottom: 80,
    alignItems: 'center',
  },
  cardLogo: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  stepSubhead: {
    color: styleConstants.subhead_text,
  },
  sleepSubhead: {
    color: styleConstants.sleep_subhead,
  },
  goalAmount: {
    fontFamily: fontConstants.currentGoal,
    fontSize: 28,
  },
  sleepTextColor: {
    color: styleConstants.light_text,
  },
  stepTextColor: {
    color: styleConstants.dark_text,
  },
  stepGoalTextColor: {
    color: styleConstants.progress_color,
  },
  progress: {
    flex: 1,
    height: 130,
    width: 130,
    top: 16,
    left: 8,
  },
  cardTitle: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: fontConstants.cardTitle,
    color: styleConstants.dark_text,
  },
  cardSubtitle: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: fontConstants.cardTitle,
    color: styleConstants.dark_text,
  },
  cardBody: {
    flex: 1,
    flexDirection: 'row',
  },
  cardSegment: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 30,
    justifyContent: 'center',
  },
  cardSegmentRight: {
    alignItems: 'center',
  },
  cardDivider: {
    height: '50%',
    top: 40,
    borderRightWidth: 2,
  },
  stepDivider: {
    borderRightColor: styleConstants.step_divider,
  },
  sleepDivider: {
    borderRightColor: styleConstants.progress_bg_alt,
  },
});
