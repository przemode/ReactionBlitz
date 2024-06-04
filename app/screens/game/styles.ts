import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainHomeContainer: {
    backgroundColor: '#febf02',
    flex: 1,
    height: '100%',
  },
  
  targetContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },
  targetItemContainer: {
    backgroundColor: '#000',
    marginRight: 10,
    marginLeft: 10,
    height: 50,
    width: '35%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#f8a500',
    borderWidth: 5,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  targetItemText:{
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'EncodeSansSemiExpanded-Bold',
    fontSize: 13,
  },
  targetItemTextTitle: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'EncodeSansSemiExpanded-Bold',
  }
  
});

export default styles;
