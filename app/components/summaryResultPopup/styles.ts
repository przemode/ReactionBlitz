import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: '#00000088',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainPopup: {
    width: '70%',
    borderRadius: 20,
    // height: 340,
    backgroundColor: '#febf00',
    borderColor: '#fff',
    borderWidth: 3,
  },
  header: {
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#000',
    fontFamily: 'EncodeSansSemiExpanded-ExtraBold',
  },
  subTitle: {
    color: '#000000AA',
    fontFamily: 'EncodeSansSemiExpanded-Bold',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  finalReactionTimeTextTitle:{
    color: '#000000AA',
    fontFamily: 'EncodeSansSemiExpanded-Medium',
  },
  finalReactionTimeText: {
    color: '#000',
    fontSize: 30,
    fontFamily: 'EncodeSansSemiExpanded-ExtraBold',
    marginBottom: 20,
  }
});

export default styles;
