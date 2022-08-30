import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { DraxProvider, DraxView } from "react-native-drax";

const DragBox = props => {
    return (
        <DraxView
        id="red"
        style={[styles.centeredContent, styles.draggableBox, styles.red]}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={"R"}
        longPressDelay={0}
      >
        <Text>Red</Text>
      </DraxView>
    )
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
    }
});

export default DragBox;