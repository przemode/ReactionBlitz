import { SharedValue, useAnimatedStyle } from "react-native-reanimated"


const rankingHeaderAnimation = (translateX: SharedValue<number>) => {
    return useAnimatedStyle(() => ({
        transform: [{ rotateX: `${translateX.value}deg`}],
      }));
}

export { rankingHeaderAnimation }