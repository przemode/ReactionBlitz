import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';


interface MenuButtonProps {
  onPress: () => void;
  buttonText: string;
}

function MenuButton({onPress, buttonText}: MenuButtonProps): React.JSX.Element {

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Animated.View style={[styles.mainContainer]}>
          <Text style={styles.text}>{buttonText}</Text>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
}

export default MenuButton;
