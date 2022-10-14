import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default (props) => {
    return (
      <View style={styles.centerItems}>
        <FadeInView style={styles.container}>
          <Text style={styles.text}>{props.text}</Text>
        </FadeInView>
      </View>
    )
  }

const styles = StyleSheet.create({
    centerItems: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: 150,
        height: 50,

        borderRadius: 20,
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
        color: Colors.bashfulness
    },
});