import {StyleSheet} from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleConstants.base_background,
    paddingHorizontal: 15,
  },
  titleCard: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: styleConstants.light_background,
    justifyContent: "space-between",
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },

  cardLogo: {
    width: 70,
    height: 70,
    margin: 20,
    borderRadius: 35,
    resizeMode: 'contain',
  },
  goalHeadline: {
    color: styleConstants.progress_color,
    fontWeight: 'bold',
    justifyContent: "center",
    fontSize: 30,
  },
  goalSubhead: {
    fontWeight: 'bold',
    color: styleConstants.subhead_text,
  },
  goalAmount: {
    color: styleConstants.progress_color,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 30,
  },

  centerSection: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 15,
  },
  leftCard: {
    flex: 1,
    backgroundColor: styleConstants.light_background,
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginRight: 7.5,
  },

  leftCardTitle: {
    fontWeight: '700',
    fontSize: 14,
  },
  cardInfo: {
    // position: 'absolute',
    width: 150,
    left: 0,
    bottom: 80,
    alignItems: 'center',
  },
  rightCard: {
    flex: 1,
    backgroundColor: styleConstants.light_background,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginLeft: 7.5,
  },
  dailySteps: {
    color: styleConstants.light_text,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  // card: {
  //   flex: 1,
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   height: 200,
  //   width: 200,
  //   marginVertical: 20,
  // },
  progress: {
    flex: 1,
    height: 130,
    width: 130,
    // position: 'absolute',
    top: 16,

  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
    borderRadius: 60,
    resizeMode: 'contain',
  },

});
