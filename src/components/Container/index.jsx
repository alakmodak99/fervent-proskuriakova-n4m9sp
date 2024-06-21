import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
function Container({ item }) {
  return (
    <View style={styles.app}>
      <View testID="transaction-item" style={styles.list}>
        <View style={styles.header}>
          <Text testID="address">{item?.location?.address}</Text>
          <Text testID="amount"> {item?.amount}</Text>
        </View>
        <View style={styles.header}>
          <Text testID="city">{item?.location?.city}</Text>
          <Text testID="date">{item?.date}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    display: "flex",
    marginVertical: 5,
  },
  list: {
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justItems: "center",
    gap: "10px",
    border: "1px solid",
    width: 180,
    borderRadius: 8,
  },
  header: {
    padding: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "10px",
  },
  options: {
    border: "1px solid",
    padding: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    borderRadius: 10,
  },
});

export default Container;
