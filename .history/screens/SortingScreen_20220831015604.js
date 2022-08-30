import * as React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { DraxProvider, DraxView } from "react-native-drax";
import Colors from "../constants/Colors";
import DragBox from "../components/DragBox";
import { GARBAGES } from "../data/dummy-data";

import RenderGarbages from "../components/RenderGarbages";


const SortingScreen = (props) => {
  const [items, setItems] = React.useState(['red','blue']);
  const [received, setReceived] = React.useState([]);
  const [staged, setStaged] = React.useState([]);
  const [garbages, setGarbages] = React.useState(GARBAGES);

//   return testAA.map((garbage) => {
//     <DraxProvider>
//     <View style={styles.palette}>
//       <DragBox id={garbage.id} title={garbage.title} />
//     </View>
//     </DraxProvider>

//   const onDelete = props => {
//     const items = [...garbages];
//     console.log(props);
//     staged.map((staged, index) => {
//       if (props.id == "red") {
//         console.log("hi");
//         //   staged.splice(index, 1);
//       }
//     });
//     setStaged(staged);
//   };

const deleteItem = () => {
    console.log("test");

  }

return (
    <DraxProvider>
      <View style={styles.palette}>
        <DragBox id={garbages[0].id} title={GARBAGES[0].title} onDragDrop={deleteItem}/>
        <DragBox id={garbages[1].id} title={GARBAGES[1].title}/>
        <DragBox id={garbages[2].id} title={GARBAGES[2].title}/>
        <DragBox id={garbages[3].id} title={GARBAGES[3].title}/>

        {/* <RenderGarbages items={garbages} /> */}
      </View>

      <View style={styles.container}>
        <DraxView
          style={[styles.centeredContent, styles.receivingZone, styles.general]}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            return (
              <>
                <Text>General Waste</Text>
                <Text style={styles.incomingPayload}>{payload || "-"}</Text>
                <Text style={styles.received}>{received.join(" ")}</Text>
              </>
            );
          }}
          onReceiveDragDrop={(event) => {
            setReceived([...received, event.dragged.payload || "?"]);
          }}
        />

        <DraxView
          dragPayload={staged.join(" ")}
          draggable={staged.length > 0}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            const dragging = viewState && viewState.dragStatus !== 0;
            const combinedStyles = [
              styles.centeredContent,
              styles.receivingZone,
              styles.recycle,
            ];
            if (dragging) {
              combinedStyles.push({ opacity: 0.2 });
            } else if (receivingDrag) {
              combinedStyles.push(styles.receiving);
            }
            return (
              <View style={combinedStyles}>
                <Text>Recycle Bin</Text>
                <Text style={styles.incomingPayload}>{payload || "-"}</Text>
                <Text style={styles.received}>{staged.join(" ")}</Text>
              </View>
            );
          }}
          renderHoverContent={({ viewState }) => {
            const offsetStyle = viewState.grabOffset
              ? {
                  marginLeft: viewState.grabOffset.x - 30,
                  marginTop: viewState.grabOffset.y - 30,
                }
              : undefined;
            const combinedStyles = [
              styles.centeredContent,
              styles.draggableBox,
              styles.cyan,
              offsetStyle,
            ];
            if (viewState.dragStatus === 1) {
              combinedStyles.push(styles.hoverDragging);
            }
            return (
              <View style={combinedStyles}>
                <Text style={styles.stagedCount}>{staged.length}</Text>
              </View>
            );
          }}
          onReceiveDragDrop={(event) => {
            setStaged([...staged, event.dragged.payload || "?"]);
          }}
          onDragDrop={() => setStaged([])}
        />
      </View>
    </DraxProvider>
  );
};



//     return (
//         <DraxProvider>
//             <View style={styles.palette}>
//             <View style={styles.container}>
//             <DragBox id={garbage.id} title={garbage.title} />
//             </View>
//             </View>
//         </DraxProvider>
//     )
//   }

//   return (
//     <FlatList data={GARBAGES} renderItem={renderGridItem} numColumns={2} />
//   );



//   return (
//     <DraxProvider>
//       <View style={styles.palette}>
//         <DragBox id={GARBAGES[0].id} title={GARBAGES[0].title}/>
//         <DragBox id={GARBAGES[1].id} title={GARBAGES[1].title}/>
//         <DragBox id={GARBAGES[2].id} title={GARBAGES[2].title}/>
//         <DragBox id={GARBAGES[3].id} title={GARBAGES[3].title}/>
//       </View>

//       <View style={styles.container}>
//         <DraxView
//           style={[styles.centeredContent, styles.receivingZone, styles.general]}
//           receivingStyle={styles.receiving}
//           renderContent={({ viewState }) => {
//             const receivingDrag = viewState && viewState.receivingDrag;
//             const payload = receivingDrag && receivingDrag.payload;
//             return (
//               <>
//                 <Text>General Waste</Text>
//                 <Text style={styles.incomingPayload}>{payload || "-"}</Text>
//                 <Text style={styles.received}>{received.join(" ")}</Text>
//               </>
//             );
//           }}
//           onReceiveDragDrop={(event) => {
//             setReceived([...received, event.dragged.payload || "?"]);
//           }}
//         />

//         <DraxView
//           dragPayload={staged.join(" ")}
//           draggable={staged.length > 0}
//           renderContent={({ viewState }) => {
//             const receivingDrag = viewState && viewState.receivingDrag;
//             const payload = receivingDrag && receivingDrag.payload;
//             const dragging = viewState && viewState.dragStatus !== 0;
//             const combinedStyles = [
//               styles.centeredContent,
//               styles.receivingZone,
//               styles.recycle,
//             ];
//             if (dragging) {
//               combinedStyles.push({ opacity: 0.2 });
//             } else if (receivingDrag) {
//               combinedStyles.push(styles.receiving);
//             }
//             return (
//               <View style={combinedStyles}>
//                 <Text>Recycle Bin</Text>
//                 <Text style={styles.incomingPayload}>{payload || "-"}</Text>
//                 <Text style={styles.received}>{staged.join(" ")}</Text>
//               </View>
//             );
//           }}
//           renderHoverContent={({ viewState }) => {
//             const offsetStyle = viewState.grabOffset
//               ? {
//                   marginLeft: viewState.grabOffset.x - 30,
//                   marginTop: viewState.grabOffset.y - 30,
//                 }
//               : undefined;
//             const combinedStyles = [
//               styles.centeredContent,
//               styles.draggableBox,
//               styles.cyan,
//               offsetStyle,
//             ];
//             if (viewState.dragStatus === 1) {
//               combinedStyles.push(styles.hoverDragging);
//             }
//             return (
//               <View style={combinedStyles}>
//                 <Text style={styles.stagedCount}>{staged.length}</Text>
//               </View>
//             );
//           }}
//           onReceiveDragDrop={(event) => {
//             setStaged([...staged, event.dragged.payload || "?"]);
//           }}
//           onDragDrop={() => setStaged([])}
//         />
//       </View>
//     </DraxProvider>
//   );
// };

const styles = StyleSheet.create({
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
  receivingZone: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  receiving: {
    borderColor: "red",
    borderWidth: 2,
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
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  magenta: {
    backgroundColor: "#ffaaff",
  },
  general: {
    backgroundColor: Colors.general,
  },
  recycle: {
    backgroundColor: Colors.recycle,
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

export default SortingScreen;
