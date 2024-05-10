import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import menuButtonClickAnimation from '../../animations/menuButtonClickAnimation';
import SettingsButton from '../../components/settingsButton/SettingsButton';
import styles from './styles';
import { store } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { changeDifficultLevel, changeGridSize } from '../../redux/slices/playerSettingsSlice'
import EDificultLevel from '../../enums/EDificultLevel';


function Settings({navigation}: any): React.JSX.Element {

    const dispatch = useDispatch()
    const playerSettings = useSelector((state: any) => state.playerSettings)

    const offset = useSharedValue<number>(25);
    const rotation = useSharedValue<number>(0);
    const scale = useSharedValue<number>(0.6);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            offset.value = 0;
            rotation.value = 0;
            scale.value = 0.6;
        });
        return unsubscribe;
    }, [navigation]);


    const animatedExit = menuButtonClickAnimation(offset, rotation)

    const handleChangeDifficultLevel = (): void => {
        dispatch(changeDifficultLevel())
        dispatch(changeGridSize())
    } 

    const test = () => {
        console.log(JSON.stringify(store.getState().playerSettings))
    }

    return (
      <View style={styles.mainHomeContainer}>
          <View style={styles.logoContainer}>
              <Image
              style={styles.logo}
              source={require('../../assets/images/blitzlogo.png')}
              />
          </View>

          <Animated.View style={[styles.menuButton, animatedExit]}>
              <SettingsButton buttonText={playerSettings.level} titleText='Difficult Level:' onPress={handleChangeDifficultLevel}/>
          </Animated.View>
          <Animated.View style={[styles.menuButton, animatedExit]}>
              <SettingsButton buttonText='English' titleText='language:' onPress={test}/>
          </Animated.View>
          <Animated.View style={[styles.menuButton, animatedExit]}>
              <SettingsButton buttonText='Remove Data' titleText='Reset Game:' onPress={test}/>
          </Animated.View>
      </View>
    );
}

export default Settings;
