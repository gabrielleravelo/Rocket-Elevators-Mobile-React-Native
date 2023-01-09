import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";
import { useState } from "react";
import { Button } from "@rneui/themed";

const Separator = () => <View style={styles.separator} />;

export default function ElevatorScreen({ navigation, route }) {
  const elevatorid = parseInt(route.params.id);
  const [currentstatus, setStatus] = useState(route.params.status);
  const colorStatus = currentstatus === "online" ? "green" : "red";

  // Call API to make a post request to change the status to online
  const changeStatus = async (setStatus) => {
    try {
      const response = await axios.post(
        `https://3e86-209-172-20-75.ngrok.io/api/Elevator/UpdateStatusElevatorById?id=${elevatorid}&status=online`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setStatus(response.data);
    } catch (err) {
      console.log("changeStatus error:", err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/R2.png")} style={styles.image} />
      <Text style={styles.title}>Elevator Status</Text>
      <View style={styles.details}>
        <Text style={styles.text}>ID : {elevatorid}</Text>
        <Separator />
        <Text style={styles.text}>Type : {route.params.type}</Text>
        <Separator />
        <Text style={styles.text}>Model : {route.params.model}</Text>
        <Separator />
        <Text style={styles.text}>
          Serial Number : {route.params.serialNumber}
        </Text>
        <Separator />
        <Text style={styles.text}>
          Status :
          <Text style={{ color: colorStatus, fontWeight: "bold" }}>
            {" "}
            {currentstatus}
          </Text>
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          title="CHANGE STATUS"
          titleStyle={{
            fontWeight: "bold",
            fontSize: 18,
          }}
          buttonStyle={{
            backgroundColor: "green",
            borderWidth: 2,
            borderColor: "transparent",
            borderRadius: 30,
            height: 60,
            width: 180,
          }}
          onPress={() => changeStatus(setStatus)}
        />
        <Button
          title="HOME"
          icon={{
            name: "home",
            type: "font-awesome",
            size: 20,
            color: "white",
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{
            fontWeight: "bold",
            fontSize: 18,
          }}
          buttonStyle={{
            backgroundColor: "#022E7A",
            borderColor: "transparent",
            borderWidth: 2,
            borderRadius: 30,
            height: 60,
            width: 180,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  image: {
    width: "50%",
    height: 70,
    marginBottom: 30,
    marginLeft: "25%",
    marginVertical: 30,
  },
  details: {
    flex: 0.7,
    backgroundColor: "white",
    borderWidth: 1,
    margin: 30,
    borderRadius: 20,
    borderColor: "transparent",
    shadowColor: "#022E7A",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: "#022E7A",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: "25%",
    color: "#022E7A",
  },
  separator: {
    marginVertical: 18,
    borderBottomColor: "#D0D0D0",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
  },
});
