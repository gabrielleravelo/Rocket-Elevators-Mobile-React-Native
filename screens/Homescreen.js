import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@rneui/themed";

// Call API to get elevator not operating
const getElevators = async (setElevators) => {
  try {
    const res = await axios.get(
      "https://3e86-209-172-20-75.ngrok.io/api/Elevator/GetAllElevatorStatusNotOperation",
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    setElevators(res.data);
  } catch (error) {
    console.warn("[getElevators] error:", error);
  }
};

const onElevatorPress = (elevator, navigation) => {
  navigation.navigate("Elevator", {
    id: elevator.id,
    status: elevator.status,
    type: elevator.buildingType,
    model: elevator.model,
    serialNumber: elevator.serialNumber,
  });
};

const Item = ({ elevator, navigation }) => (
  <TouchableOpacity
    onPress={() => onElevatorPress(elevator, navigation)}
    style={styles.item}
  >
    <Text style={styles.title}>
      {" "}
      Elevator {elevator.id} --- {elevator.buildingType}
    </Text>
  </TouchableOpacity>
);

const logout = (navigation) => {
  navigation.replace("Login");
};

const HomeScreen = ({ navigation }) => {
  const [elevators, setElevators] = useState(null);

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      getElevators(setElevators);
    });
    return focusHandler;
  }, [navigation]);

  const renderItem = ({ item }) => (
    <Item elevator={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/R2.png")} style={styles.image} />

      <FlatList
        data={elevators}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="LOG OUT"
        buttonStyle={{
          backgroundColor: "rgba(199, 43, 98, 1)",
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: "25%",
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={() => logout(navigation)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#022E7A",
  },
  item: {
    backgroundColor: "steelblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 28,
    color: "white",
  },
  image: {
    width: "50%",
    height: 70,
    marginVertical: 30,
    marginLeft: "25%",
  },
});

export default HomeScreen;
