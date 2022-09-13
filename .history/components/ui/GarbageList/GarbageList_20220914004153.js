import { View, FlatList, StyleSheet } from 'react-native';

import GarbageItem from './GarbageItem';

function GarbageList({items}) {
  function renderGarbageItem(itemData) {
    const item = itemData.item;

    const GarbageItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <GarbageItem {...GarbageItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderGarbageItem}
      />
    </View>
  );
}

export default GarbageList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
