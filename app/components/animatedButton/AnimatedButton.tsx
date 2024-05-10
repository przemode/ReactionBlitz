import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';


interface AnimatedButtonProps {
  onPress: () => void;
}

function AnimatedButton({onPress}: AnimatedButtonProps): React.JSX.Element {
  
  const rotateRight = useSharedValue<number>(0);
  const rotateLeft = useSharedValue<number>(0);

  const duration = 2000;
  const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

  useEffect(() => {
    rotateRight.value = withRepeat(withTiming(1, {duration, easing}), -1);
    rotateLeft.value = withRepeat(withTiming(1, {duration, easing}), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${rotateRight.value * 360}deg`}]
  }));

  const animatedStyleRev = useAnimatedStyle(() => ({
    transform: [{rotate: `${rotateRight.value * -360}deg`}]
  }));

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Animated.View style={[styles.mainContainer, animatedStyle]}>
          <Animated.View style={animatedStyleRev}>
            <Icon name="caretright" size={60} color="#febf00" />
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
}

export default AnimatedButton;
