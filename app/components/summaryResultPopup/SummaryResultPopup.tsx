import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { Easing, ReduceMotion, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import IconFA6 from 'react-native-vector-icons/FontAwesome6';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { boltAnimation } from '../../animations/boltAnimation';
import { popupEntering } from '../../animations/popupEntering';
import { snailAnimation } from '../../animations/snailAnimation';
import MenuButton from '../menuButton/MenuButton';
import styles from './styles';
import { useTranslation } from 'react-i18next';

interface MenuButtonProps {
  onPress: () => void;
  isSuccess: boolean,
  avgReaction: number;
}

function SummaryResultPopup({onPress, isSuccess, avgReaction}: MenuButtonProps): React.JSX.Element {
    const { t } = useTranslation()
    const scale = useSharedValue<number>(0)
    const rotation = useSharedValue<number>(180);
    const translateX = useSharedValue<number>(-100)
    const opacity = useSharedValue<number>(0.01)

    const scaleAnim = popupEntering(scale)
    const rotationAnim = boltAnimation(rotation)
    const translateXAnim = snailAnimation(translateX, opacity)


    useEffect(() => {
        scale.value = withTiming(1)
        rotation.value = withDelay(1000, withTiming(1))
        translateX.value = withDelay(1000, withTiming(1, {
            duration: 1450,
            easing: Easing.inOut(Easing.quad),
            reduceMotion: ReduceMotion.System,
        }))
        opacity.value = withDelay(1000, withTiming(1, {
            duration: 600,
        }))
    }, [])

    useEffect(() => {
        console.log(avgReaction)
    }, [])

    return (
        <View style={styles.mainContainer}>
            <Animated.View style={[styles.mainPopup, scaleAnim]}>
                <View style={styles.header}>
                    {isSuccess ? (<>
                        <Animated.View style={[rotationAnim]}>
                            <IconFA6 name="bolt" size={60} color="#000" />
                        </Animated.View>
                        <Text style={styles.title}>{t('game.summaryResultPopup.winner')}</Text>
                        <Text style={styles.subTitle}>{t('game.summaryResultPopup.youAreFast')}</Text>
                    </>) : (<>
                        <Animated.View style={[translateXAnim]}>
                            <IconMCI name="snail" size={60} color="#000" />
                        </Animated.View>
                        <Text style={styles.title}>{t('game.summaryResultPopup.lost')}</Text>
                        <Text style={styles.subTitle}>{t('game.summaryResultPopup.youAreSlow')}</Text>
                    </>)}
                    
                </View>
                <View style={styles.content}>
                    <Text style={styles.finalReactionTimeTextTitle}>
                        {t('game.summaryResultPopup.yourAverageTime')}:
                    </Text>
                    <Text style={styles.finalReactionTimeText}>
                    {avgReaction.toFixed(3)} s
                    </Text>
                    <MenuButton buttonText='ok' onPress={onPress}/>
                </View>
            </Animated.View>
        </View>
    );
}

export default SummaryResultPopup;
