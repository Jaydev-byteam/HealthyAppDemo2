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
    width: 70,
    height: 70,
    margin: 20,
    borderRadius: 35,
    resizeMode: 'contain',
  },

  mainCard: {
    flex: 1,
    backgroundColor: styleConstants.light_background,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10
  },

  goalQuery: {
    color: styleConstants.dashboard_subhead,
    fontFamily: fontConstants.title,
    textAlign: 'center',
    fontSize: 21,
  },

});
