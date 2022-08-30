import React, { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import BoxItem from "./BoxItem";
import { nanoid } from "nanoid";

export default function Box(props) {
  const { targetKey } = props;
  const [items, setItems] = useState([]);

  const handleDrop = (e) => {
    //let items = this.state.items.slice();
    //items.push({label: e.dragData.label, uid: shortid.generate()});
    //this.setState({items: items});

    console.log("handleDrop ", e);

    const newItem = { label: e.dragData.label, uid: nanoid() };
    const newItems = [...items];
    newItems.splice(items.length, 0, newItem);
    setItems(newItems);
    e.containerElem.style.visibility = "hidden";
  };

  const swap = (fromIndex, toIndex, dragData) => {
    //let items = this.state.items.slice();
    //const item = { label: dragData.label, uid: shortid.generate() };
    //items.splice(toIndex, 0, item);
    //this.setState({ items: items });

    console.log("swap ", dragData, fromIndex, toIndex);

    const newItem = { label: dragData.label, uid: nanoid() };
    const newItems = [...items];
    newItems.splice(toIndex, 0, newItem);
    setItems(newItems);
  };

  const kill = (uid) => {
    //let items = this.state.items.slice();
    //const index = items.findIndex((item) => {
    //  return item.uid == uid;
    //});
    //if (index !== -1) {
    //  items.splice(index, 1);
    //}
    //this.setState({ items: items });

    console.log("kill ", uid);

    const newItems = [...items];
    items.map((item, index) => {
      if (item.uid == uid) {
        newItems.splice(index, 1);
      }
    });

    setItems(newItems);
  };

  return (
    <div className="component_box">
      <DropTarget
        onHit={handleDrop}
        targetKey={targetKey}
        dropData={{ name: props.name }}
      >
        <DropTarget
          onHit={handleDrop}
          targetKey="boxItem"
          dropData={{ name: props.name }}
        >
          <div className="box">
            {console.log("items ", items)}
            {items.map((item, index) => {
              return (
                <BoxItem
                  key={item.uid}
                  uid={item.uid}
                  kill={kill}
                  index={index}
                  swap={swap}
                  label={item.label}
                >
                  {item.label}
                </BoxItem>
              );
            })}
          </div>
        </DropTarget>
      </DropTarget>
    </div>
  );
}
