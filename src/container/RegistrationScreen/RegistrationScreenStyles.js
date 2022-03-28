import { StyleSheet } from 'react-native';
import { styleConstants } from "../../_constants/StyleConstants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: styleConstants.background_color,
  },

  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: styleConstants.input_background,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16
  },

  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: styleConstants.subhead_text,
    fontWeight: 'bold'
  },
  footerLink: {
    color: styleConstants.light_text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  validationView: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  success: {
    color: styleConstants.success_color,
    fontSize: 14,
    marginBottom: 10,
  },
  error: {
    color: styleConstants.error_color,
    fontSize: 14
  },
})
