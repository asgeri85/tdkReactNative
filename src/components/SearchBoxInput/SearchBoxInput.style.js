import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 52,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    shadowColor: '#295B5B5B',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0A151F',
  },
  delete: {
    marginRight: 10,
  },
});
