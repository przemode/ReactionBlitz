import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countContainer: {
    position: 'absolute',
    opacity: 0,
  },
  textCount:{
    fontFamily: 'EncodeSansSemiExpanded-ExtraBold',
    fontSize: 40,
    color: '#febf00'
  }
});

export default styles;
