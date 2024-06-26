import React, { useEffect } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-get-random-values';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Block from '../../models/Block';
import styles from './styles';

interface BlocksGridProps {
    row: number;
    col: number;
    grid: Block[][],
    onPressElement: (id?: any) => void
  }

function BlocksGrid({row, col, grid, onPressElement}: BlocksGridProps): React.JSX.Element {

    const rows: number = row;
    const columns: number = col;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const elementWidth: number = windowWidth * 0.9 / columns - 20;
    const elementHeight: number = (windowHeight/2) / rows - 20;
    const scale = useSharedValue<number>(0);
    

    const animatedScale = useAnimatedStyle(() => {
        return {transform: [{scale: withSpring(scale.value * 1, {damping: 16})}]};
    });

    useEffect(() => {
        scale.value = 1
    }, [grid])

    return (
        <Animated.View style={[styles.mainContainer]}>
            {grid?.map((row: Array<any>, key: number) => (
                <View key={key} style={{...styles.row, height: elementHeight}}>
                    {row?.map((columns: Block, key: number) => (
                        <Animated.View key={key} style={[animatedScale]}>
                        <TouchableOpacity onPress={() => onPressElement(columns)} style={{...styles.column, width: elementWidth, backgroundColor: columns.color }}>
                            <Text style={{fontSize: 12, color: '#fff'}}>
                                
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
