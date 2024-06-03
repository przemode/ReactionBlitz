import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import megaScaleAnimation from '../../animations/megaScaleAnimation';
import menuButtonClickAnimation from '../../animations/menuButtonClickAnimation';
import playButtonMenuAnimation from '../../animations/playButtonMenuAnimation';
import AnimatedButton from '../../components/animatedButton/AnimatedButton';
import MenuButton from '../../components/menuButton/MenuButton';
import { useTranslation } from 'react-i18next';
import styles from './styles';

function Home({navigation}: any): React.JSX.Element {
    const {t} = useTranslation();
    const offset = useSharedValue<number>(0);
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

    const menuButtonClickAnim = menuButtonClickAnimation(offset, rotation)
    const megaScaleAnim = megaScaleAnimation(scale)
    const animatedExit = playButtonMenuAnimation(offset, rotation)

    const exitAnimation = (): void => {
        rotation.value = 15;
        offset.value = withDelay(300, withTiming(25))
        scale.value = withDelay(500, withTiming(19))
        setTimeout(() => {
            navigation.navigate('Game')
        }, 800)

    }

    const navigateToScreen = (screenName: string): void => {
        rotation.value = -15;
        offset.value = withDelay(300, withTiming(-55))
        setTimeout(() => {
            navigation.navigate(screenName)
        }, 450)
    } 

    const test = (): void => {
        console.log('xd')
    }

    return (
      <View style={styles.mainHomeContainer}>
          <View style={styles.logoContainer}>
              <Image
              style={styles.logo}
              source={require('../../assets/images/blitzlogo.png')}
              />
          </View>
          <Animated.View style={[styles.startButton, megaScaleAnim, menuButtonClickAnim]}>
              <AnimatedButton onPress={exitAnimation}/>
          </Animated.View>
          <Animated.View style={[styles.menuButton, animatedExit, menuButtonClickAnim]}>
              <MenuButton buttonText={t('home.ranking')} onPress={() => navigateToScreen('Ranking')}/>
          </Animated.View>
          <Animated.View style={[styles.menuButton, animatedExit, menuButtonClickAnim]}>
              <MenuButton buttonText={t('home.settings')} onPress={() => navigateToScreen('Settings')}/>
          </Animated.View>
          <Animated.View style={[styles.menuButton, animatedExit, menuButtonClickAnim]}>
              <MenuButton buttonText={t('home.exit')} onPress={test}/>
          </Animated.View>
      </View>
    );
}

export default Home;
