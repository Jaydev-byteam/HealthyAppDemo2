import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';
import {fontConstants} from '../../_constants/FontConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleConstants.base_background,
    paddingHorizontal: 15,
    // alignItems: 'center',
  },

  permissions: {
    marginVertical: 100,
    fontFamily: fontConstants.title,
    fontSize: 24,
    color: styleConstants.dark_text,
    textAlign: "center",
  },

  locationImage: {
    flex: 1,
    height: 200,
    width: 352,
    resizeMode: 'contain',
    marginBottom: 30,
  },
});
