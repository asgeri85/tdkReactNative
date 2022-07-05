import {Dimensions, StyleSheet} from 'react-native';

const device = Dimensions.get('screen');

export default StyleSheet.create({
  image: {
    width: '100%',
    height: device.height * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    paddingHorizontal: 10,
    marginTop: -20,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  detail: {
    flex: 1,
    padding: 10,
  },
  textExpression: {
    fontSize: 12,
    fontWeight: '500',
    color: '#758291',
    margin: 5,
  },
  expressionContainer: {
    marginTop: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  searchContainer: {
    flex: 1,
  },
  searchListContainer: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  menu: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
});
