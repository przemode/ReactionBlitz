import { SharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated"


const counterAnimation = (scale: SharedValue<number>, opacity: SharedValue<number>) => {
    return useAnimatedStyle(() => {
        return {
            transform: [
                {scale: withSpring(scale.value * 2)},
            ],
            opacity: withSpring(opacity.value+1)
        }
    })
}

export { counterAnimation }