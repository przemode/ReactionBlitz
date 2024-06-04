import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainHomeContainer: {
    backgroundColor: '#febf02',
    flex: 1,
    height: '100%',
    width: '100%'
  },
  logoContainer: {
    backgroundColor: '#000',
    paddingTop: 40,
    paddingBottom: 40,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: '35%',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  startButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 45,
  },
  menuButton: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  }
});

export default styles;
