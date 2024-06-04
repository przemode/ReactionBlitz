import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    width: '90%',
    borderRadius: 20,
    height: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  column: {
    alignItems: 'stretch',
    backgroundColor: '#febf00',
    borderRadius: 10,
    height: '100%',
    flexDirection: 'column',
    marginRight: 5,
    marginLeft: 5,
  }
});

export default styles;
