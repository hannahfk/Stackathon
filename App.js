import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "../../Stackathon/client/components/navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text>
        Open up App.js to start working on your app!
        <hr></hr>
        Here is my first line of code in React Native!!🎉
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
