import { View, Text, StyleSheet } from 'react-native';
import { DraxProvider, DraxView } from "react-native-drax";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Colors } from "../../constants/styles";

const DragBox = props => {
    return (
        <DraxView
        id={props.id}
        style={[styles.centeredContent, styles.draggableBox]}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={props.title}
        longPressDelay={0}
        onDragDrop={props.onDragDrop}
      >
        <Text>{props.title}</Text>
      </DraxView>
    )
};
{/* <View style={{...styles.card, ...props.style}}>{props.children}</View> */}
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
    },
    container: {
        flex: 1,
        padding: 12,
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "space-around",
      },
      centeredContent: {
        justifyContent: "center",
        alignItems: "center",
      },

      incomingPayload: {
        marginTop: 10,
        fontSize: 24,
      },
      received: {
        marginTop: 10,
        fontSize: 18,
      },
      palette: {
        paddingTop: 30,
        flexDirection: "row",
        justifyContent: "space-around",
        height: "60%",
      },
      draggableBox: {
        flex: 1,
        flexWrap: true,
        width: 150,
        height: 120,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
      },
      dragging: {
        opacity: 0.2,
      },
      hoverDragging: {
        borderColor: "magenta",
        borderWidth: 2,
      },
      stagedCount: {
        fontSize: 18,
      },
});

export default DragBox;