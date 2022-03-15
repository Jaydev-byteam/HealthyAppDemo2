import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#550096',
  },
  pageContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    flex: 1,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
    marginTop: 40,
    marginLeft: 20,
  },
  backButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 36,
    marginLeft: 12,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  }

});
