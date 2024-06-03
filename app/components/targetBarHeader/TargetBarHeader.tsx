import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import targetHeaderAnimation from '../../animations/targetHeaderAnimation';
import styles from './styles';
import { useTranslation } from 'react-i18next';


interface TargetBarHeaderProps {
  minAvgTime: number;
  numberOfIterations: number;
}

function TargetBarHeader({minAvgTime, numberOfIterations}: TargetBarHeaderProps): React.JSX.Element {
    const {t} = useTranslation()
    const rotateRight = useSharedValue<number>(50);

    const targetBarAnim = targetHeaderAnimation(rotateRight)

    useEffect(() => {
        rotateRight.value = withDelay(300, withTiming(0))
    }, [])

    return (
        <Animated.View style={[styles.targetContainer, targetBarAnim]}>
            <View style={styles.targetItemContainer}>
                    <Text style={styles.targetItemTextTitle}>{t('game.targetBarHeader.minAverageTime')}:</Text>
                    <View style={styles.targetItemTextIcon}>
                        <Icon name="timer" size={13} color="#febf00" />
                        <Text style={styles.targetItemText} >{minAvgTime.toFixed(3)} s</Text>
                    </View>
            </View>
                <View style={styles.targetItemContainer}>
                    <Text style={styles.targetItemTextTitle}>{t('game.targetBarHeader.numberOfReactions')}:</Text>
                    <View style={styles.targetItemTextIcon}>
                        <Icon name="gesture-tap-hold" size={16} color="#febf00" />
                        <Text style={styles.targetItemText} >{numberOfIterations}</Text>
                    </View>
            </View>
        </Animated.View>
    );
}

export default TargetBarHeader;
