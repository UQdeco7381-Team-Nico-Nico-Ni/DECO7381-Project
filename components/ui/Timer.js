/**
 * CountDown Timer Component
 */

// packages
import React, { useRef, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/styles';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import { Alert } from 'react-native';

function Timer() {
  // Timer References
  const refTimer = useRef();

  // For keeping a track on the Timer
  const [timerEnd, setTimerEnd] = useState(false);

  const timerCallbackFunc = (timerFlag) => {
    // Setting timer flag to finished
    setTimerEnd(timerFlag);
    Alert.alert('Time Out!')
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ display: timerEnd ? 'none' : 'flex' }}>
        <CountDownTimer
          ref={refTimer}
          timestamp={90}
          timerCallback={timerCallbackFunc}
          containerStyle={{
            height: 56,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 35,
            backgroundColor: Colors.bearBrown,
          }}
          textStyle={{
            fontSize: 25,
            color: '#FFFFFF',
            fontWeight: '500',
            letterSpacing: 0.25,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          display: 'none',
          height: 56,
          width: 120,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 35,
          backgroundColor: Colors.bearBrown,
        }}
        onPress={() => {
          setTimerEnd(false);
          refTimer.current.resetTimer();
        }}>
        <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' }}>
          Time out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Timer;