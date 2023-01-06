import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Alert,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";

const getElevators = async (setElevators) => {
  try {
    const res = await axios.get(
      "https://71ad-209-172-20-75.ngrok.io/api/Elevator/GetAllElevatorStatusNotOperation",
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("elevator: ", res.data);

    setElevators(res.data);
  } catch (error) {
    console.warn("[getElevators] error:", error);
  }
};

const onElevatorPress = (elevator, navigation) => {
  console.log("onElevatorPress elevator:", elevator);
  navigation.navigate("Elevator", {
    id: elevator.id,
    status: elevator.status,
  });
};

const Item = ({ elevator, navigation }) => {
  console.log("elevator is:", elevator.id);

  return (
    <Button
      style={styles.item}
      title={elevator.id.toString()}
      onPress={() => onElevatorPress(elevator, navigation)}
    />
  );
};

const HomeScreen = ({ navigation }) => {
  const [elevators, setElevators] = useState(null);
  console.log("ascenseur id ve? : ", elevators);

  useEffect(() => {
    getElevators(setElevators);
  }, []);

  const renderItem = ({ item }) => (
    <Item elevator={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text> List of Elevators ID that are not online</Text>
      <FlatList
        data={elevators}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginBottom: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
