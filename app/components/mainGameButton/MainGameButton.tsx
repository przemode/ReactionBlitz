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
import Icon from 'react-native-vector-icons/FontAwesome6';


interface MainGameButtonProps {
  onPress: () => void;
  buttonText: string;
  icon: React.JSX.Element;
}

function MainGameButton({onPress, buttonText, icon}: MainGameButtonProps): React.JSX.Element {

  return (
    <>
        <TouchableOpacity style={styles.startButton} onPress={onPress}>
            {icon}
            <Text style={styles.startButtonText}>{buttonText}</Text>
        </TouchableOpacity>
    </>
  );
}

export default MainGameButton;
