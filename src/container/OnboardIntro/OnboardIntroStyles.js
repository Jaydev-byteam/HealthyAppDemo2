import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleConstants.base_background,
    paddingHorizontal: 15,
    justifyContent: "center",
  },

  title: {
    fontFamily: fontConstants.title,
    fontSize: 28,
    textAlign: "center",
    marginTop: 80,
    marginBottom: 20,
    marginHorizontal: 20,
  },

  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },



  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  footerButton: {
    backgroundColor: styleConstants.progress_color,
    marginRight: 10,
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

});
