import React from "react";
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import axios from "axios";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useState } from "react";

export default function ElevatorScreen({ navigation, route }) {
  const elevatorid = parseInt(route.params.id);
  const [currentstatus, setStatus] = useState(route.params.status);
  console.log("current status ", currentstatus);

  const changeStatus = async (setStatus) => {
    try {
      const response = await axios.post(
        `https://71ad-209-172-20-75.ngrok.io/api/Elevator/UpdateStatusElevatorById?id=${elevatorid}&status=online`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setStatus(response.data);
    } catch (e) {
      console.log("changeStatus e:", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/R2.png")} style={styles.image} />
      <Text> Status Page </Text>
      <View>
        <Text> Elevator : {elevatorid}</Text>
        <Text> Type building : {route.params.type}</Text>
        <Text> Model : {route.params.model}</Text>
        <Text> Serial Number : {route.params.serialNumber}</Text>
        <Text>Status {currentstatus}</Text>
      </View>
      <Button title="Change status" onPress={() => changeStatus(setStatus)} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  image: {
    width: "50%",
    height: 70,
    marginBottom: 30,
    marginLeft: "25%",
  },
});
