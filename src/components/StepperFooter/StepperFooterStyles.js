import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';


export default StyleSheet.create({
  footerButton: {
    backgroundColor: styleConstants.progress_color,
    marginLeft: 40,
    marginRight: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dummyButton: {
    visibility: 'hidden',
    marginLeft: 20,
    marginRight: 40,
    paddingHorizontal: 20,
    marginVertical: 20,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallText: {
    fontSize: 22,
    fontFamily: fontConstants.button,
    textAlign: 'center',
    color: styleConstants.light_text,
  },

  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  paginationDot: {
    marginHorizontal: 6,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

});
