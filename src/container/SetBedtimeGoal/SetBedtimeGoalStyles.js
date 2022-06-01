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
    backgroundColor: styleConstants.card_sleep,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },

  goalQuery: {
    color: styleConstants.light_text,
    fontFamily: fontConstants.title,
    textAlign: 'center',
    marginHorizontal: 15,
    marginVertical: 15,
    fontSize: 24,
  },

  goalAdjust: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: styleConstants.card_sleep,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  bedtimeButton: {
    borderRadius: 30,
    backgroundColor: styleConstants.dark_card_text,
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
  sleepGoal: {
    color: styleConstants.light_text,
    fontSize: 30,
    fontFamily: fontConstants.currentGoal,
    textAlign: 'center',
  },
  editText: {
    color: styleConstants.dark_card_text,
    fontFamily: fontConstants.subtext,
    fontSize: 12,
    textAlign: 'center',
  },
  sleepGoalGraphic: {
    flex: 1,
    height: 200,
    padding: 10,
  },
  sleepImage: {
    flex: 1,
    height: 180,
    width: 317,
    resizeMode: 'contain',
  },
  sleepEdit: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: styleConstants.card_sleep,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
});
