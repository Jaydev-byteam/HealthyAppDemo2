import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';

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
    fontWeight: '700',
    color: styleConstants.step_divider,
    fontSize: 14,
    textAlign: 'center',
  },
  goalAmount: {
    color: styleConstants.light_text,
    fontWeight: '700',
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
    fontWeight: '700',
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
    fontWeight: '700',
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
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
    color: styleConstants.light_text,
  },

  rightCardSubhead: {
    fontWeight: '600',
    color: styleConstants.light_text,
    textAlign: 'center',
  },
  weeklyAverage: {
    fontWeight: '700',
    fontSize: 32,
    color: styleConstants.light_text,
  },
  dailySleep: {
    color: styleConstants.light_text,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    height: 200,
    width: 200,
    marginVertical: 20,
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
