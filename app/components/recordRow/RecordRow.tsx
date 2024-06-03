import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RankingItem from '../../models/RankingItem';
import styles from './styles';
import { useTranslation } from 'react-i18next';



function RecordRow({level, avgTime}: RankingItem): React.JSX.Element {
    const {t} = useTranslation()

    return (
        <TouchableOpacity style={styles.rankContainer}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>
                    {t('ranking.level')}:
                </Text>   
                <Text style={styles.itemText}>
                    {level}
                </Text>
            </View>
            <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>
                    {t('ranking.time')}: 
                </Text>   
                <Text style={styles.itemText}>
                    {avgTime!.toFixed(3)} s
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default RecordRow;
