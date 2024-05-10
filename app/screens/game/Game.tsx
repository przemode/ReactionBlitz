import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ScoreHeader from '../../components/scoreHeader/ScoreHeader';
import EDificultLevel from '../../enums/EDificultLevel';
import BlocksGrid from '../../components/blocksGrid/BlocksGrid';
import {
  increment,
} from '../../redux/slices/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../redux/store'

function Game({navigation}: any): React.JSX.Element {
  const dispatch = useDispatch();
    
  const test = (): void => {
    dispatch(increment())
    console.log(store.getState())
  }

    return (
      <View style={styles.mainHomeContainer}>
          <ScoreHeader 
            difficultyLevel={EDificultLevel.Easy}
            time={200}
            level={1}
          />
          <TouchableOpacity
          onPress={() => navigation.pop()}
          ><Text>BACK</Text></TouchableOpacity>

          <BlocksGrid />

          <TouchableOpacity onPress={() => test()}>
            <Text>ssss</Text>
          </TouchableOpacity>
      </View>
    );
}

export default Game;
