import { SharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated"


const snailAnimation = (translateX: SharedValue<number>, opacity: SharedValue<number>) => {
    return useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
        opacity: opacity.value,
      }));
}

export { snailAnimation }