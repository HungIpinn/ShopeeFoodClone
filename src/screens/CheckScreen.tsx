import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ViewToken,
} from "react-native";

const { width } = Dimensions.get("window");

type ItemA = { id: string; name: string };
type ItemB = { id: string; name: string; image: string };

const listA: ItemA[] = [
  { id: "1", name: "Tab 1" },
  { id: "2", name: "Tab 2" },
  { id: "3", name: "Tab 3" },
  { id: "4", name: "Tab 4" },
];

const listB: ItemB[] = [
  { id: "1", name: "Item 1", image: "img1" },
  { id: "2", name: "Item 2", image: "img2" },
  { id: "3", name: "Item 3", image: "img3" },
  { id: "4", name: "Item 4", image: "img4" },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListBRef = useRef<FlatList<ItemB> | null>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setActiveIndex(viewableItems[0].index!);
      }
    }
  ).current;

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      {/* List A ngang */}
      <FlatList
        horizontal
        data={listA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              setActiveIndex(index);
              flatListBRef.current?.scrollToIndex({ index, animated: true });
            }}
            style={{
              padding: 10,
              borderBottomWidth: 2,
              borderBottomColor:
                activeIndex === index ? "blue" : "transparent",
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* List B dọc */}
      <FlatList
        ref={flatListBRef}
        data={listB}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              height: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{item.name}</Text>
          </View>
        )}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
    </View>
  );
}