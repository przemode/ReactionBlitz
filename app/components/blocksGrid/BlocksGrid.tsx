import React, { useEffect, useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-get-random-values';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { v1 as uuidv1 } from 'uuid';
import Block from '../../models/Block';
import styles from './styles';

interface BlocksGridProps {
    row: number;
    col: number;
  }

function BlocksGrid({row, col}: BlocksGridProps): React.JSX.Element {

    const rows: number = row;
    const columns: number = col;
    const windowWidth = Dimensions.get('window').width;
    const elementWidth: number = windowWidth * 0.9 / columns - 20;
    const elementHeight: number = 500 / rows - 20;
    const scale = useSharedValue<number>(0);
    
    const [grid, setGrid] = useState<any>()

    const setupGrid = (): void => {
        let gridArray2D: any = []
        for (let i = 0; i < rows; i++) {
            let tempRow: any = []
            for (let j = 0; j < columns; j++) {
                let block = new Block(uuidv1(), i, j)
                tempRow.push(block)
            }
            gridArray2D.push(tempRow)
        }
        setGrid(gridArray2D)
    }

    const animatedScale = useAnimatedStyle(() => {
        return {transform: [{scale: withSpring(scale.value * 1, {damping: 16})}]};
    });

    useEffect(() => {
        setupGrid()
    }, [])

    useEffect(() => {
        scale.value = 1
    }, [grid])

    return (
        <Animated.View style={[styles.mainContainer]}>
            {grid?.map((row: Array<any>, key: number) => (
                <View key={key} style={{...styles.row, height: elementHeight}}>
                    {row?.map((columns: Block, key: number) => (
                        <Animated.View key={key} style={[animatedScale]}>
                        <TouchableOpacity style={{...styles.column, width: elementWidth }}>
                            <Text style={{fontSize: 12}}>
                                {columns.id}
                            </Text>
                        </TouchableOpacity>
                        </Animated.View>
                    ))}
                </View>
            ))}
        </Animated.View>
    );
}

export default BlocksGrid;
