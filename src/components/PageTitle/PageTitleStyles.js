import {StyleSheet} from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  titleContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginVertical: 50,
  },
  logo: {
    flex: 1,
    height: 90,
    width: 90,
    alignSelf: 'center',
    margin: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    color: styleConstants.dark_text,
  },
  sleepTitleText: {
    fontSize: 24,
    fontWeight: '700',
    color: styleConstants.light_text,
  },
});
