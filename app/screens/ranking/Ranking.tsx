import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Animated, { BounceIn, BounceInDown, BounceInLeft, BounceInUp, BounceOutUp, FadeIn, FadeInDown, FadeInRight, FadingTransition, useSharedValue, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import RecordRow from '../../components/recordRow/RecordRow';
import RankingItem from '../../models/RankingItem';
import styles from './styles';
import { rankingHeaderAnimation } from '../../animations/rankingHeaderAnimation';

function Ranking({navigation}: any): React.JSX.Element {
 
    const rankingState: RankingItem[] = useSelector((state: any) => state.playerSettings.ranking)
    const perspective = useSharedValue(90);
    const [isExtistRank, setIsExistRank] = useState<boolean>(false)

    const rankingHeaderAnim = rankingHeaderAnimation(perspective)

    useEffect(() => {
        
        if(rankingState.length > 0 ) setIsExistRank(true)

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
         {isExtistRank ?
                <ScrollView>
                    {rankingState.map((rank: RankingItem, index: number) => {
                        return(
                            <Animated.View key={index} entering={BounceInUp.springify(2000)}  >
                                <RecordRow avgTime={rank.avgTime} level={rank.level}/>
                            </Animated.View>
                        )
                    })}
                </ScrollView>
            :
                <Animated.View style={styles.emptyRankingContainer} entering={FadeInDown.springify(2000)}>
                    <Text style={styles.emptyRankingText}>You don't have any rankings</Text>
                </Animated.View>
            }
      </View>
    );
}

export default Ranking;
