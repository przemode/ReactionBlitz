import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import menuButtonClickAnimation from '../../animations/menuButtonClickAnimation';
import SettingsButton from '../../components/settingsButton/SettingsButton';
import { changeDifficultLevel, changeGridSize, changeLanguage } from '../../redux/slices/playerSettingsSlice';
import { store } from '../../redux/store';
import styles from './styles';


function Settings({navigation}: any): React.JSX.Element {

    const {t} = useTranslation();
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

    const handleChangeLanguage = (): void => {
        dispatch(changeLanguage())
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
                <SettingsButton
                    buttonText={t(`settings.${playerSettings.dificultyLevel.toLowerCase()}`)}
                    titleText={t('settings.difficultLevel')}
                    onPress={handleChangeDifficultLevel}
                />
          </Animated.View>
          <Animated.View style={[styles.menuButton, animatedExit]}>
                <SettingsButton 
                    buttonText={t('settings.lang')}
                    titleText={t('settings.language')} 
                    onPress={handleChangeLanguage}
                />
          </Animated.View>
          <Animated.View style={[styles.menuButton, animatedExit]}>
                <SettingsButton
                    buttonText={t('settings.removeData')}
                    titleText={t('settings.resetGame')}
                    onPress={test}
                />
          </Animated.View>
      </View>
    );
}

export default Settings;
