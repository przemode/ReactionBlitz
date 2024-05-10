import { SharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated"


const megaScaleAnimation = (scale: SharedValue<number>) => {
    return useAnimatedStyle(() => {
        return {transform: [{scale: withSpring(scale.value * 2, {damping: 16})}]};
    })
}

export default megaScaleAnimation