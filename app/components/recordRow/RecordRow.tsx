import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import EDificultLevel from '../../enums/EDificultLevel';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RankingItem from '../../models/RankingItem';



function RecordRow({level, avgTime}: RankingItem): React.JSX.Element {


    return (
        <TouchableOpacity style={styles.rankContainer}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>
                    Level: 
                </Text>   
                <Text style={styles.itemText}>
                    {level}
                </Text>
            </View>
            <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>
                    Time: 
                </Text>   
                <Text style={styles.itemText}>
                    {avgTime!.toFixed(3)} ms
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default RecordRow;
