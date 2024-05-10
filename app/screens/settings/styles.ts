import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainHomeContainer: {
    backgroundColor: '#febf02',
    flex: 1,
  },
  logoContainer: {
    backgroundColor: '#000',
    paddingTop: 70,
    paddingBottom: 70,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    width: 250,
    height: 210,
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
