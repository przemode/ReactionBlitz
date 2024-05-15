import { SharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated"


const boltAnimation = (rotation: SharedValue<number>) => {
    return useAnimatedStyle(() => ({
        transform: [{ rotateZ: withSpring(`${rotation.value}deg`) }],
      }));
}

export { boltAnimation }