import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import AnimatedButton from '../../components/animatedButton/AnimatedButton';
import MenuButton from '../../components/menuButton/MenuButton';
import styles from './styles';


function Home({navigation}: any): React.JSX.Element {

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


    const animatedExit = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: withSpring(offset.value * 20)},
                {rotate: withSpring(`${rotation.value}deg`)}
            ],
        };
    });

    const animatedScale = useAnimatedStyle(() => {
        return {transform: [{scale: withSpring(scale.value * 2, {damping: 16})}]};
    });

    const exitAnimation = (): void => {
        rotation.value = 15;
        offset.value = withDelay(300, withTiming(25))
        scale.value = withDelay(500, withTiming(19))
        setTimeout(() => {
            navigation.navigate('Game')
        }, 800)

    }

    const test = (): void => {
        console.log("TEST")
    } 

    return (
      <View style={styles.mainHomeContainer}>
          <View style={styles.logoContainer}>
              <Image
              style={styles.logo}
              source={require('../../assets/images/blitzlogo.png')}
              />
          </View>
          <Animated.View style={[styles.startButton, animatedScale]}>
              <AnimatedButton onPress={exitAnimation}/>
          </Animated.View>
          <Animated.View style={[styles.menuButton, animatedExit]}>
              <MenuButton buttonText='Ranking' onPress={test}/>
          </Animated.View>
          <Animated.View style={[styles.menuButton, animatedExit]}>
              <MenuButton buttonText='Settings' onPress={test}/>
          </Animated.View>
          <Animated.View style={[styles.menuButton, animatedExit]}>
              <MenuButton buttonText='Exit' onPress={test}/>
          </Animated.View>
      </View>
    );
}

export default Home;
