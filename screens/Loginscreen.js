import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import axios from "axios";
import { useState } from "react";
import { Button } from "@rneui/themed";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");

  // Call API to verify if email exists in the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please Enter an Email");
      return;
    }

    try {
      const res = await axios.get(
        "https://3e86-209-172-20-75.ngrok.io/api/Employee/ValidateEmail",

        {
          headers: { "Content-Type": "application/json" },
          params: {
            inputemail: email,
          },
        }
      );
      // If res.data true (email exists), go to home page
      if (res.data) {
        navigation.replace("Home");
      } else {
        alert("Incorrect Email!");
      }
      setEmail("");
    } catch (err) {
      setErrMsg("Login Failed!", err);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/R2.png")} style={styles.image} />
      <TextInput
        value={email}
        placeholder={"Email"}
        onChangeText={(email) => setEmail(email)}
        style={styles.input}
      />

      <Button
        title="LOG IN"
        buttonStyle={{
          backgroundColor: "rgba(199, 43, 98, 1)",
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 250,
          marginVertical: 10,
        }}
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#022E7A",
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "transparent",
    marginBottom: 20,
    backgroundColor: "white",
  },
  image: {
    width: "50%",
    height: 70,
    marginBottom: 50,
  },
});
