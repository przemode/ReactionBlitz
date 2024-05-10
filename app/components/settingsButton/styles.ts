import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    width: 250,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    
  },
  text: {
    color: '#febf00',
    fontSize: 20,
    fontFamily: 'EncodeSansSemiExpanded-Bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  titleText:{
    fontFamily: 'EncodeSansSemiExpanded-Regular',
    fontSize: 15,
    color: '#febf00',
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 5,
  }
});

export default styles;
