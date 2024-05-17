import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rankContainer: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#c78500'
  },
  itemContainer: {
    borderRadius: 10,
    width: '50%',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    
  },
  itemTitle: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'left',
    width: '100%',
    fontFamily: 'EncodeSansSemiExpanded-Bold',
  },
  
  itemText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'EncodeSansSemiExpanded-ExtraBold',
  }
});

export default styles;
