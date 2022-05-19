import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
    cardLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 20,
    resizeMode: 'contain',
  },

  mainCard: {
    flex: 1,
    // backgroundColor: styleConstants.light_background,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },

  stepColor: {
    backgroundColor: styleConstants.light_background,
  },

  sleepColor: {
    backgroundColor: styleConstants.card_sleep,
  },

  titleBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    paddingRight: 30,
  },

  stepTitle: {
    fontFamily: fontConstants.title,
    fontSize: 21,
    color: styleConstants.onboard_title,
  },

  sleepTitle: {
    fontFamily: fontConstants.extraBold,
    fontSize: 24,
    color: styleConstants.light_text,
  },

  goalGraphic: {
    flex: 1,
    height: 200,
    padding: 10,
  },

  goalImage: {
    flex: 1,
    height: 180,
    width: 317,
    resizeMode: 'contain',
  },
});
