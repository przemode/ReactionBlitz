import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Animated, { BounceInDown, BounceInUp, FadeIn, FadeInDown, FadeInRight, useSharedValue, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import RecordRow from '../../components/recordRow/RecordRow';
import RankingItem from '../../models/RankingItem';
import styles from './styles';
import { rankingHeaderAnimation } from '../../animations/rankingHeaderAnimation';

function Ranking({navigation}: any): React.JSX.Element {
 
    const rankingState: RankingItem[] = useSelector((state: any) => state.playerSettings.ranking)
    const [rankingArr, setRankingArr] = useState<RankingItem[]>([])
    const [refresh, setRefresh] = useState<boolean>(false)

    const perspective = useSharedValue(90);

    const rankingHeaderAnim = rankingHeaderAnimation(perspective)

    useEffect(() => {
        setRankingArr(rankingState)
        setRefresh(!refresh)
        perspective.value = withTiming(1, {
            duration: 500,
        })
    }, [])
    

    return (
      <View style={styles.mainContainer}>
         <Animated.View style={[styles.header, rankingHeaderAnim]}>
                <View style={styles.iconHeaderContainer}>
                    <Icon name="trophy" size={25} color="#f8a500" />
                </View>
            <Text style={styles.headerText}>
                Ranking
            </Text>
         </Animated.View>
         <ScrollView>
            {rankingArr.map((rank: RankingItem, index: number) => {
                return(
                    <Animated.View key={index} entering={BounceInUp.springify(2000)}  >
                        <RecordRow avgTime={rank.avgTime} level={rank.level}/>
                    </Animated.View>
                )
            })}
         </ScrollView>
      </View>
    );
}

export default Ranking;
