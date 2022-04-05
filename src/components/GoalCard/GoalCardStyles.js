import {StyleSheet} from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    // height: 170,
    // width: 160,
    marginHorizontal: 10,
    marginBottom: 30,
  },
  graphic: {
    width: 160,
    left: 25,
  },
  logo: {
    // flex: 1,
    width: 90,
    height: 90,
    marginTop: 15,
    borderRadius: 45,
    resizeMode: 'contain',
  },
  cardInfo: {
    position: 'absolute',
    width: 160,
    left: 0,
    bottom: 0,
    alignItems: 'center',
  },
  goalTitle: {
    color: styleConstants.light_text,
    marginBottom: 0,
    fontWeight: 'bold',
  },
  goalAmount: {
    color: styleConstants.subhead_text,
    fontWeight: 'bold',
  },
  progress: {
    height: 120,
    width: 120,
    position: 'absolute',
    top: 0,
  },
});
