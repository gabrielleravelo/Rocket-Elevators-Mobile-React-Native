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
  Image,
  TouchableOpacity,
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
    type: elevator.buildingType,
    model: elevator.model,
    serialNumber: elevator.serialNumber,
  });
};

// const Item = ({ elevator, navigation }) => {
//   console.log("elevator is:", elevator.id);

//   return (
//     // <Touchable onPress={() => onElevatorPress(elevator, navigation)}>
//     <Text
//       onPress={() => onElevatorPress(elevator, navigation)}
//       style={styles.item}
//     >
//       Elevator {elevator.id}
//     </Text>
//     // </Touchable>

//     // <Button
//     //   style={styles.item}
//     //   title={elevator.id.toString()}
//     //   onPress={() => onElevatorPress(elevator, navigation)}
//     // />
//   );
// };

const Item = ({ elevator, navigation }) => (
  <TouchableOpacity
    onPress={() => onElevatorPress(elevator, navigation)}
    style={styles.item}
  >
    <Text style={styles.title}>
      {" "}
      Elevator {elevator.id} :: {elevator.buildingType}{" "}
    </Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const [elevators, setElevators] = useState(null);
  // console.log("ascenseur id ve? : ", elevators);

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      getElevators(setElevators);
    });
    return focusHandler;
  }, [navigation]);

  const renderItem = ({ item }) => (
    <Item elevator={item} navigation={navigation} />
  );

  // console.log("renderItem", renderItem);
  const logout = () => {
    navigation.replace("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/R2.png")} style={styles.image} />

      <FlatList
        data={elevators}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Button color="red" title={"Logout"} onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // justifyContent: "center",
    // alignItems: "center",
  },
  item: {
    backgroundColor: "steelblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 28,
  },
  image: {
    width: "50%",
    height: 70,
    marginBottom: 30,
    marginLeft: "25%",
  },
});

export default HomeScreen;
