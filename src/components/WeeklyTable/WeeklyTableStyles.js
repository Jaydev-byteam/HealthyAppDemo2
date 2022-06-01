import {StyleSheet} from 'react-native';
import {styleConstants} from '../../_constants/StyleConstants';

export default StyleSheet.create({
  table: {
    marginVertical: 20,
  },
  column: {
    width: 50,
    borderWidth: 1,
    borderColor: styleConstants.table_border,
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: styleConstants.light_text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkmark: {
    color: styleConstants.light_text,
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 15,
  },
});
