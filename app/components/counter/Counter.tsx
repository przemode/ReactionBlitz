import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { counterAnimation } from '../../animations/counterAnimation';
import styles from './styles';



function Counter(): React.JSX.Element {

  const scale3 = useSharedValue<number>(0);
  const opacity3 = useSharedValue<number>(0);


  const scale2 = useSharedValue<number>(0);
  const opacity2 = useSharedValue<number>(0);

  

  const scale1 = useSharedValue<number>(0);
  const opacity1 = useSharedValue<number>(0);



  const scaleStart = useSharedValue<number>(0);
  const opacityStart = useSharedValue<number>(0);


  const count3Anim = counterAnimation(scale3, opacity3 )
  const count2Anim = counterAnimation(scale2, opacity2 )
  const count1Anim = counterAnimation(scale1, opacity1 )
  const startAnim = counterAnimation(scaleStart, opacityStart)



  useEffect(() => {
    opacity3.value = withDelay(1000, withTiming(1))
    scale3.value = withDelay(1000, withTiming(1))
    opacity3.value = withDelay(1300, withTiming(-1))

    opacity2.value = withDelay(2000, withTiming(1))
    scale2.value = withDelay(2000, withTiming(1))
    opacity2.value = withDelay(2300, withTiming(-1))

    opacity1.value = withDelay(3000, withTiming(1))
    scale1.value = withDelay(3000, withTiming(1))
    opacity1.value = withDelay(3300, withTiming(-1))

    opacityStart.value = withDelay(4000, withTiming(1))
    scaleStart.value = withDelay(4000, withTiming(1))
    opacityStart.value = withDelay(4300, withTiming(-1))

  }, [])



  return (
    <View style={styles.mainContainer}>
      <Animated.View style={[styles.countContainer, count3Anim]}>
        <Text style={styles.textCount}>
        3
        </Text>
      </Animated.View>
      <Animated.View style={[styles.countContainer, count2Anim]}>
        <Text style={styles.textCount}>
        2
        </Text>
      </Animated.View>
      <Animated.View style={[styles.countContainer, count1Anim]}>
        <Text style={styles.textCount}>
        1
        </Text>
      </Animated.View>
      <Animated.View style={[styles.countContainer, startAnim]}>
        <Text style={styles.textCount}>
        START!
        </Text>
      </Animated.View>
    </View>
  );
}

export default Counter;
