import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ScoreHeader from '../../components/scoreHeader/ScoreHeader';
import EDificultLevel from '../../enums/EDificultLevel';
import BlocksGrid from '../../components/blocksGrid/BlocksGrid';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../redux/store'

function Game({navigation}: any): React.JSX.Element {
  const playerSettings = useSelector((state: any) => state.playerSettings)

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

          <BlocksGrid col={playerSettings.gridSize.col} row={playerSettings.gridSize.row}/>
      </View>
    );
}

export default Game;
