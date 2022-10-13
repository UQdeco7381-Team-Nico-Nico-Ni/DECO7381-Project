import { FlatList } from "react-native";

import RecordDataItem from "./RecordDataItem";

function renderRecordItem(itemData) {
  return <RecordDataItem {...itemData.item}/>;
}

const RecordList = (props) => {
    return (
        <FlatList
        data={props.records}
        renderItem={renderRecordItem}
        keyExtractor={(item) => item.id}
      />
    )
  }

export default RecordList;