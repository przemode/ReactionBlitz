import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';


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
