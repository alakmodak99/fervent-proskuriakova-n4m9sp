import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const HEADERLIST = ["All", "Credit", "Debit"];
function Header({ onChange, setCurrentHeader, currHeader }) {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        {" "}
        {HEADERLIST?.map((e, i) => {
          return (
            <Pressable
              testID={e?.toLocaleLowerCase() + "-button"}
              onPress={() => {
                onChange(e);
                setCurrentHeader(e);
              }}
              style={currHeader === e ? styles.optionsSelected : styles.options}
            >
              <Text>{e} </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    display: "flex",
  },
  header: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justItems: "center",
    gap: "10px",
  },
  options: {
    padding: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    borderRadius: 10,
  },
  optionsSelected: {
    border: "1px solid blue",
    padding: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    borderRadius: 10,
    backgroudColor: "black",
    color: "white",
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

export default Header;
