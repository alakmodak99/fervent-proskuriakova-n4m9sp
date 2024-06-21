import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import Header from "../src/components/Header";
import Container from "./components/Container";
const DATA = [
  {
    id: "1",
    date: "29-01-2023",
    txnType: "credit",
    amount: "$2,954.06",
    location: {
      id: "5",
      address: "206, Portaline, Brooklyn Avenue",
      city: "Brownlee",
      zipcode: "80358",
    },
  },
  {
    id: "2",
    date: "29-01-2024",
    txnType: "debit",
    amount: "$2,084.06",
    location: {
      id: "6",
      address: "207, Portaline, Brooklyn Avenue",
      city: "Bourg",
      zipcode: "09743",
    },
  },
  {
    id: "3",
    date: "29-01-2024",
    txnType: "debit",
    amount: "$1,084.06",
    location: {
      id: "7",
      address: "207, Portaline, Brooklyn Avenue",
      city: "Bourg",
      zipcode: "09743",
    },
  },
];
const filterList = (data, type) => {
  if (type === "All") return data;
  if (type === "Credit")
    return [...data]?.filter((e) => e?.txnType === "credit");
  if (type === "Debit") return [...data]?.filter((e) => e?.txnType === "debit");
};

function App() {
  const [listData, setListData] = useState(DATA);
  const [currHeader, setCurrentHeader] = useState("All");
  console.log(listData, "----");
  return (
    <View style={styles.app}>
      <Header
        currHeader={currHeader}
        setCurrentHeader={setCurrentHeader}
        onChange={(e) => {
          setListData(filterList(DATA, e));
        }}
      />
      <FlatList
        data={listData}
        renderItem={Container}
        keyExtractor={(e) => e?.id?.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
  },
  logo: {
    height: 80,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default App;
