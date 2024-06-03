import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { useTranslation } from 'react-i18next';


interface ScoreHeaderProps {
  level: number;
  time: number;
  difficultyLevel: string;
}

function ScoreHeader({level, time, difficultyLevel}: ScoreHeaderProps): React.JSX.Element {

    const {t} = useTranslation()
    const offset = useSharedValue<number>(-100);


    const animatedEnter = useAnimatedStyle(() => {
        return {
            transform: [
                {translateY: withSpring(offset.value * 1)},
            ],
        };
    });

    const animatedTimeEnter = useAnimatedStyle(() => {
        return {
            transform: [
                {translateY: withSpring(offset.value * 1)},
            ],
        };
    });

    useEffect(() => {
        offset.value = 0
    }, [])

    return (
        <Animated.View style={[styles.mainContainer, animatedEnter]}>
            <Animated.View style={[styles.levelContainer]}>
                <Icon name="chess-queen" size={20} color="#febf00" />
                <Text style={styles.normalText}>
                    {level}
                </Text>
            </Animated.View>
            <Animated.View style={[styles.timeContainer, animatedTimeEnter]}>
                    <Icon name="clock" size={20} color="#febf00" />
                <Text style={styles.timeText}>
                    {time == undefined ? '0.0' : time} s
                </Text>
            </Animated.View>
            <Animated.View style={[styles.levelContainer]}>
                <Icon name="gamepad" size={20} color="#febf00" />
                <Text style={styles.normalText}>  
                    {t(`settings.${difficultyLevel.toLowerCase()}`)}
                </Text>
            </Animated.View>
        </Animated.View>
    );
}

export default ScoreHeader;
