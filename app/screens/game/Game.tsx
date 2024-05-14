import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ScoreHeader from '../../components/scoreHeader/ScoreHeader';
import EDificultLevel from '../../enums/EDificultLevel';
import BlocksGrid from '../../components/blocksGrid/BlocksGrid';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../redux/store'
import GenerateGrid from '../../logic/GenerateGrid';
import Block from '../../models/Block';
import MilisecondsToSeconds from '../../utils/Miliseconds'
import { AvgArray } from '../../utils/Math'
import LevelConfig from '../../LevelConfig.json'
import Icon from 'react-native-vector-icons/FontAwesome6'
import MainGameButton from '../../components/mainGameButton/MainGameButton';
import { setupNextLevel } from '../../redux/slices/playerSettingsSlice'
import TargetBarHeader from '../../components/targetBarHeader/TargetBarHeader';
import Counter from '../../components/counter/Counter';

function Game({navigation}: any): React.JSX.Element {
    const dispatch = useDispatch()
    const playerSettings = useSelector((state: any) => state.playerSettings)
    const [generatedGrid, setGeneratedGrid] = useState(GenerateGrid(playerSettings.gridSize.col, playerSettings.gridSize.row))
    const [refresh, setRefresh] = useState(false)
    const [drawnElement, setDrawnElement] = useState<Block>()

    const [startTime, setStartTime] = useState<Date>()
    const [summaryClickTime, setSummaryClickTime] = useState<any>()
    const [reactionTimes, setReactionTimes] = useState<number[]>([])
    const [isPlaying, setIsPlaying] = useState<Boolean>(false)
    const [currentIteration, setCurrentIteration] = useState<number>(1)
    const [isCounter, setIsCounter] = useState<boolean>(false)

    

    const generateRandomIndexes = () => {
        let col = Math.floor(Math.random() * playerSettings.gridSize.col);
        let row = Math.floor(Math.random() * playerSettings.gridSize.row);

        let tempClone = generatedGrid
        tempClone[col][row].color = '#febf00'

        setDrawnElement(tempClone[col][row])
        setGeneratedGrid(tempClone)
        setRefresh(!refresh)
    }

    const onPressElement = (childData: Block) => {
        if(childData == drawnElement){
            const tempArr: Block[][] = generatedGrid.map(arr => {
                return arr.map(obj => {
                    if(obj == childData){
                        obj.color = '#000';
                    }
                    return obj
                })
            })
            setGeneratedGrid(tempArr)
            
            
            let endTime = new Date();
            
            let clickTime = MilisecondsToSeconds(endTime?.getTime() - startTime!.getTime())

            setSummaryClickTime(clickTime)
            let reactionTimesTemp = reactionTimes
            reactionTimesTemp.push(clickTime)
            setReactionTimes(reactionTimesTemp)

            if(currentIteration < playerSettings.currentLevel.iterations){
                setCurrentIteration(currentIteration+1)
                if(isPlaying) runNextIteration()
            } else {
                let avgTime = AvgArray(reactionTimes)
                stop()
                if(avgTime <= playerSettings.currentLevel.avgReactionTime){
                    dispatch(setupNextLevel())
                    console.log("____WIN____")
                } else{
                    console.log("____GAME OVER____")
                }
                console.log(playerSettings)
            }

        }
    }

    const runNextIteration = () => {
        setTimeout(() => {
            let startTime = new Date();
            setStartTime(startTime)
            generateRandomIndexes()
        }, playerSettings.delayTime);
    }

    const start = () => {
        setIsCounter(true)
        setIsPlaying(true)
        if(currentIteration === 0) setReactionTimes([])
        
        setTimeout(() => {
            setIsCounter(false)
            runNextIteration()
        }, 5000)
        
    }

    const stop = () => {
        setIsPlaying(false)
        setGeneratedGrid(GenerateGrid(playerSettings.gridSize.col, playerSettings.gridSize.row))
        setSummaryClickTime(undefined)
        setCurrentIteration(0)
    }

    

    
    return (
        <View style={styles.mainHomeContainer}>


            {isCounter && <Counter/>}

            <ScoreHeader 
                difficultyLevel={playerSettings.dificultyLevel}
                time={summaryClickTime}
                level={playerSettings.currentLevel.currentLevel}
            />

            <TargetBarHeader
                minAvgTime={playerSettings.currentLevel.avgReactionTime}
                numberOfIterations={playerSettings.currentLevel.iterations}
            />


            <BlocksGrid 
                grid={generatedGrid} 
                col={playerSettings.gridSize.col} 
                row={playerSettings.gridSize.row}
                onPressElement={onPressElement}
                />

                {isPlaying ?
                    <MainGameButton
                    buttonText='STOP GAME'
                    onPress={() => stop()}
                    icon={<Icon name="stop" size={20} color="#f8a500" />}
                    />
                :
                    <MainGameButton
                        buttonText='START'
                        onPress={() => start()}
                        icon={<Icon name="bolt" size={20} color="#f8a500" />}
                    />
                }
      </View>
    );
}

export default Game;
