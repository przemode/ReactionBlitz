import { SharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated"


const popupEntering = (scale: SharedValue<number>) => {
    return useAnimatedStyle(() => {
        return {
            transform: [
                {scale: withSpring(scale.value)},
            ],
        }
    })
}

export { popupEntering }