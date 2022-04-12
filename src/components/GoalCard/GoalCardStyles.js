import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';

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
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  graphic: {
    width: 160,
    left: 25,
  },
  logo: {
    width: 90,
    height: 90,
    marginTop: 15,
    borderRadius: 45,
    resizeMode: 'contain',
  },
  cardInfo: {
    width: 150,
    left: 0,
    bottom: 80,
    alignItems: 'center',
  },
  goalSubhead: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  stepSubhead: {
    color: styleConstants.subhead_text,
  },
  sleepSubhead: {
    color: styleConstants.sleep_subhead,
  },
  goalAmount: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  sleepTextColor: {
    color: styleConstants.light_text,
  },
  stepTextColor: {
    color: styleConstants.dark_text,
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
    fontWeight: '600',
    color: styleConstants.dark_text,
  },
  sleepCardTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: styleConstants.light_text,
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
