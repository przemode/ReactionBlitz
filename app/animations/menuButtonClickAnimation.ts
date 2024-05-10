import { SharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated"


const menuButtonClickAnimation = (offset: SharedValue<number>, rotation: SharedValue<number>) => {
    return useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: withSpring(offset.value * 20)},
                {rotate: withSpring(`${rotation.value}deg`)}
            ],
        }
    })
}

export default menuButtonClickAnimation