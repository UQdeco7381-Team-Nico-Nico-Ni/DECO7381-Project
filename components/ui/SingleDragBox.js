import { Text, StyleSheet, Image } from "react-native";
import { DraxView } from "react-native-drax";
import { Colors } from "../../constants/styles";
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
      onDragStart={props.onDragStart}
      binType={props.binType}
    >
      <Text style={styles.title}>{props.title}</Text>
      <Image
        imageAssetsFolder
        source={GarbageImages[props.imageUrl]}
        style={{ width: '50%', height: '50%', resizeMode: 'contain' }}
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
    borderWidth: 3,
    borderColor: Colors.bamboo,
    backgroundColor: "white",
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: "magenta",
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
});

export default SingleDragBox;
