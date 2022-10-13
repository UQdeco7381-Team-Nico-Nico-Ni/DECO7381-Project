import { View, Text, StyleSheet, Image } from "react-native";
import { DraxProvider, DraxView } from "react-native-drax";
import GarbageImages from "../../data/GarbageImages";

const SingleDragBox = (props) => {
  return (
    <DraxView
      id={props.id}
      style={[styles.centeredContent, styles.draggableBox]}
      draggingStyle={styles.dragging}
      dragReleasedStyle={styles.dragging}
      hoverDraggingStyle={styles.hoverDragging}
      dragPayload={props.category}
      dragCategory={props.category}
      longPressDelay={0}
      onDragDrop={props.onDragDrop}
      binType={props.binType}
    >
      <Text style={styles.title}>{props.title}</Text>
      <Image
      imageAssetsFolder
        source={GarbageImages[props.imageUrl]}
        style={{ width: 80, height: 80 }}
      />
    </DraxView>
  );
};
{
  /* <View style={{...styles.card, ...props.style}}>{props.children}</View> */
}
const styles = StyleSheet.create({
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  draggableBox: {
    width: "80%",
    height: 200,
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
  title: {
    fontSize: 16,
    paddingBottom: 5,
  }
});

export default SingleDragBox;