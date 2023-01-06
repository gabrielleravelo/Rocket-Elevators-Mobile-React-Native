import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import axios from "axios";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useRef, useState, useEffect } from "react";

export default function ElevatorScreen({ navigation, route }) {
  const elevatorid = parseInt(route.params.id);

  const changeStatus = async (setStatus) => {
    // console.log("id elevator is ", elevatorid);
    try {
      const response = await axios.post(
        `https://71ad-209-172-20-75.ngrok.io/api/Elevator/UpdateStatusElevatorById?id=${elevatorid}&status=online`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setStatus(response.data);

      console.log("response", response);
      console.log("response status", response.data);
    } catch (e) {
      console.log("changeStatus e:", e);
    }
  };
  const [currentstatus, setStatus] = useState(route.params.status);
  console.log("current status ", currentstatus);

  // useEffect(() => {
  //   changeStatus(setStatus);
  // }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/R2.png")} style={styles.image} />
      <Text> Status Page </Text>
      <Text>
        {" "}
        J'ai clické elevator n: {elevatorid} , status {currentstatus}
      </Text>
      <Button title="Change status" onPress={() => changeStatus(setStatus)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },

  image: {
    width: "50%",
    height: 70,
    marginBottom: 30,
  },
});
