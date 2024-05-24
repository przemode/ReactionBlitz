import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#febf02',
    flex: 1,
  },
  header: {
    backgroundColor: '#000',
    width: '85%',
    alignSelf: 'center',
    marginTop: 50,
    // marginBottom: 50,
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 5,
    zIndex: 2,
  },
  headerText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    textTransform: 'uppercase',
    fontFamily: 'EncodeSansSemiExpanded-ExtraBold',
  },
  iconHeaderContainer: {
    marginRight: 10,
  },
  emptyRankingContainer: {
    zIndex: 0,
    backgroundColor: '#000',
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
    height: 300,
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 5,
  },
  emptyRankingText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'EncodeSansSemiExpanded-ExtraBold',
    textAlign: 'center',
  }
});

export default styles;
