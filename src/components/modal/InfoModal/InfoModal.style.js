import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 3,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    marginHorizontal: 5,
  },
  imageBackground: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: '100%',
  },
  image: {
    height: 35,
    width: 100,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});
