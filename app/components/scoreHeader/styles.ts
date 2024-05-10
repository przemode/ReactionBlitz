import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#000',
    width: '80%',
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 4,
  },
  timeContainer: {
    backgroundColor: '#000',
    height: 80,
    width: '33%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f8a500',
    borderWidth: 5,
  },
  levelContainer: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  normalText: {
    width: '60%',
    textAlign: 'center',
    justifyContent: 'space-around',
    color: '#fff',
    fontSize: 15,
    fontFamily: 'EncodeSansSemiExpanded-Bold'
  },
  timeText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontFamily: 'EncodeSansSemiExpanded-Bold'
  }
});

export default styles;
