import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import EDificultLevel from '../../enums/EDificultLevel';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';


interface ScoreHeaderProps {
  level: number;
  time: number;
  difficultyLevel: string;
}

function ScoreHeader({level, time, difficultyLevel}: ScoreHeaderProps): React.JSX.Element {

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
                    {difficultyLevel}
                </Text>
            </Animated.View>
        </Animated.View>
    );
}

export default ScoreHeader;
