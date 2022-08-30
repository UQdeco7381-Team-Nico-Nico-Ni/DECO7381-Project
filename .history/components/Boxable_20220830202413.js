import React from "react";
import { DragDropContainer } from "react-drag-drop-container";
import { View, Text, StyleSheet, Button, Image } from "react-native";

/*
    Boxable -- a thing you can drag into a Box
*/

export default function Boxable(props) {
  const { targetKey, label, image, customDragElement } = props;
  return (
    <div className="boxable_component" style={{ display: "inline-block" }}>
      <DragDropContainer
        targetKey={targetKey}
        dragData={{ label: label }}
        customDragElement={customDragElement}
        onDragStart={() => console.log("start")}
        onDrag={() => console.log("dragging")}
        onDragEnd={() => console.log("end")}
        onDrop={(e) => console.log(e)}
      >
        <Image src={image} height="45" style={{ marginLeft: 40 }} />
      </DragDropContainer>
    </div>
  );
}