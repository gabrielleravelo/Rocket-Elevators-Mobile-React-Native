import React from "react";
import { Button, View, StyleSheet, TextInput, Image } from "react-native";
import axios from "axios";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!email.trim()) {
    //   alert("Please Enter Email");
    //   return;
    // }
    const mail = "felicia.hartono@codeboxx.biz";
    try {
      const res = await axios.get(
        "https://71ad-209-172-20-75.ngrok.io/api/Employee/ValidateEmail",

        {
          headers: { "Content-Type": "application/json" },
          params: {
            inputemail: mail,
          },
        }
      );

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
        title={"Login"}
        // style={styles.input}
        // onPress={() => navigation.navigate("Home")}
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
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
  },
  image: {
    width: "50%",
    height: 70,
    marginBottom: 30,
  },
});
