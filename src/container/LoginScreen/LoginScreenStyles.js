import {StyleSheet} from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleConstants.base_background,
  },
  logo: {
    flex: 1,
    height: 90,
    width: 90,
    alignSelf: 'center',
    margin: 10,
  },
  input: {
    height: 48,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: styleConstants.input_background,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  footerText: {
    fontSize: 16,
    color: styleConstants.subhead_text,
    fontWeight: 'bold'
  },
  footerLink: {
    color: styleConstants.blue_text,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
