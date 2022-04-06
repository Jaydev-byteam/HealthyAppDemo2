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
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
  },
  goalHeadline: {
    // color: styleConstants.light_text,
    // fontWeight: '700',
    justifyContent: 'center',
    // fontSize: 30,
  },
  goalSubhead: {
    fontWeight: '700',
    color: styleConstants.step_divider,
    fontSize: 14,
    textAlign: "center",
  },
  goalAmount: {
    color: styleConstants.light_text,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 30,
  },
  cardDivider: {
    height: '50%',
    borderRightWidth: 2,
    borderRightColor: styleConstants.dark_background,
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
    height: 160,
    width: 160,
    position: 'absolute',
    top: 0,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
    borderRadius: 60,
    resizeMode: 'contain',
  },
});
