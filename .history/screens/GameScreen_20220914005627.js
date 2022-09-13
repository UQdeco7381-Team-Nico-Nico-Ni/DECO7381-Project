import { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button, Card } from 'react-native';

import Subtitle from '../components/ui/GarbageDetail/Subtitle';
import GarbageDetails from "../components/ui/GarbageDetails";

import { DraxProvider, DraxView } from "react-native-drax";
import { Colors } from "../constants/styles";
import DragBox from "../components/ui/DragBox";
import { GARBAGES } from "../data/dummy-data";

function GameScreen({route, navigation}) {
  const [received, setReceived] = useState([]);
  const [staged, setStaged] = useState([]);
  const [garbages, setGarbages] = useState(GARBAGES);

  const garbageId = route.params.garbageId;
  const selectedGarbage = GARBAGES.find((garbage) => garbage.id === garbageId);

if (garbages.length == 0) {
    return (
        <View style={styles.gameOver}>
            <Text>Congratulation! You Got 4 Point!</Text>
          <Button
            title="Back to Menu"
            onPress={() => {
            }}
          />
        </View>
      );
}

const renderGridItem = (garbages) => {
    return garbages.map((garbage) => {
        return (
            <Card>
          <DragBox key={garbage.id} id={garbage.id} title={garbage.title} onDragDrop={() => deleteItem(garbage.id)}/>
          </Card>
        )
    })
};

const deleteItem = (id) => {
    setGarbages(garbages.filter(item => item.id !== id));
  }


return (
    <DraxProvider>
      <View style={styles.palette}>
        {renderGridItem(garbages)}

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
    backgroundColor: Colors.bashfulness,
  },
  recycle: {
    backgroundColor: Colors.bamboo,
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
  gameOver: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
  }
});

export default GameScreen;