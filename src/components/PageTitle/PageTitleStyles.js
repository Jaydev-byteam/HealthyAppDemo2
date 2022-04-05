import {StyleSheet} from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  titleContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
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
    fontWeight: 'bold',
    color: styleConstants.dark_text,
  },
});
