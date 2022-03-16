import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#550096',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
  },
  bedtime: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
  },
  editBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'none',
  },
  button: {
    backgroundColor: '#550096',
  },
  note: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  datePicker: {
    backgroundColor: 'white',
    width: 300,
  },
  timePicker: {
    marginTop: 30,
    borderRadius: 20,
  }
});
