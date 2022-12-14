/**
 * CountDown Timer Component
 */

// packages
import React, { useRef, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/styles";
import CountDownTimer from "react-native-countdown-timer-hooks";
import { Alert } from "react-native";

function Timer({ timeUpMethod }) {
  // Timer References
  const refTimer = useRef();

  // For keeping a track on the Timer
  const [timerEnd, setTimerEnd] = useState(false);
  const [isGameEnd, setIsGameEnd] = useState(false);

  const timerCallbackFunc = (timerFlag) => {
    // Setting timer flag to finished
    setTimerEnd(timerFlag);
    timeUpMethod();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ display: timerEnd ? "none" : "flex" }}>
        <CountDownTimer
          ref={refTimer}
          timestamp={60}
          timerCallback={timerCallbackFunc}
          containerStyle={{
            height: 50,
            width: 130,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 35,
            backgroundColor: Colors.bearBrown,
            borderWidth: 3,
            borderColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          textStyle={{
            fontSize: 25,
            color: "#FFFFFF",
            fontWeight: "500",
            letterSpacing: 0.25,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          display: "none",
          height: 50,
          width: 130,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 35,
          backgroundColor: Colors.bearBrown,
        }}
        onPress={() => {
          setTimerEnd(false);
          refTimer.current.resetTimer();
        }}
      >
        <Text style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "bold" }}>
          Time out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Timer;
