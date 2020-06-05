import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Wheather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.nameCity}>شهر اصفهان</Text>
        <Text>درجه هوا :27</Text>
        <Text>احساس 20 درجه میشه</Text>
        <Text>وضعیت هوا : ابری</Text>
      </View>
    </View>
  );
};

export default Wheather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7bc4f5",
  },
  name: {
    alignItems: "center",
    marginTop: 30,
    padding: 25,
  },
  nameCity: {
    fontSize: 20,
  },
});
