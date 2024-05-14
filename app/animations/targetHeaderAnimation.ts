import { ReduceMotion, SharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated"


const targetHeaderAnimation = (offset: SharedValue<number>) => {
    return useAnimatedStyle(() => {
        return {
            transform: [
                {translateY: withSpring(offset.value, {
                    mass: 4.5,
                    damping: 100,
                    stiffness: 321,
                    overshootClamping: false,
                    restDisplacementThreshold: 0.01,
                    restSpeedThreshold: 2,
                    reduceMotion: ReduceMotion.System,
                })},
            ],
        };
    })
}

export default targetHeaderAnimation