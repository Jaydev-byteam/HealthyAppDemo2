import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  table: {
    marginVertical: 20
  },
  column: {
    width: 50,
    borderWidth: 1,
    borderColor: '#b690d4',
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 15,
  },
});
