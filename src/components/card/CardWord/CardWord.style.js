import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: 'white',
    padding: 5,
    paddingVertical: 10,
  },
  border: {
    borderLeftWidth: 4,
    borderLeftColor: '#E3E5E8',
    height: 40,
    margin: 8,
  },
  textContainer: {
    margin: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0A151F',
    textAlign: 'left',
  },
  detail: {
    fontSize: 12,
    fontWeight: '400',
    color: '#48515B',
  },
});
