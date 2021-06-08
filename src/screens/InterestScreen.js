import React, { useState, Component } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  Modal,
  View,
  Pressable,
  Image,
  TextInput,
  Button,
} from "react-native";

import FriendCard from "../components/FriendCard";
import TopBar from "../components/header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const InterestScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [profile, setProfilePicture] = useState();
  const [relation, setRelationship] = useState();

  let interests = [
    {
      hobby: "badminton",
      image_url:
        "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/57145/badminton-emoji-clipart-md.png",
    },
    {
      hobby: "basketball",
      image_url:
        "https://cdn4.iconfinder.com/data/icons/good-life-1/512/SpendTimeOnAHobby-hobby-sport-basketball-basketballhoop-512.png",
    },
    {
      hobby: "hiking",
      image_url:
        "https://www.discoverahobby.com/uploads/activity/424_1563396993.jpg",
    },
  ];

  let friends = [
    {
      id: 1,
      first_name: "Gary",
      last_name: "Ortiz",
      email: "gortiz0@mapy.cz",
      country: "Indonesia",
      interest: ["anime", "badminton", "basketball"],
      image_url:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
      id: 2,
      first_name: "Albert",
      last_name: "Williamson",
      email: "awilliamson1@narod.ru",
      country: "China",
      interest: ["anime", "badminton", "basketball"],
      image_url:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
      id: 3,
      first_name: "Mildred",
      last_name: "Fuller",
      email: "mfuller2@npr.org",
      country: "Peru",
      interest: ["anime", "badminton", "basketball"],
      image_url:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
      id: 4,
      first_name: "Russell",
      last_name: "Robinson",
      email: "rrobinson3@google.pl",
      country: "Belarus",
      interest: ["anime", "badminton", "basketball"],
      image_url:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
      id: 5,
      first_name: "Laura",
      last_name: "Harper",
      email: "lharper4@boston.com",
      country: "Philippines",
      interest: ["anime", "badminton", "basketball"],
      image_url:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
    },
  ];

  const feed = () => {
    // dummy data

    const res = interests.map((interest) => {
      return (
        <LinearGradient
          key={interest.hobby}
          start={[0, 0.5]}
          end={[1, 0.5]}
          colors={["#3C4E9C", "#00A3FF"]}
          style={styles.gradient}
        >
          <View
            style={{
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={styles.avatars}
              source={{ uri: interest.image_url }}
            />
          </View>
        </LinearGradient>
      );
    });

    return res;
  };

  const friendLists = () => {
    let res = friends.map((friend) => {
      return (
        <Pressable>
          <FriendCard
            name={friend.first_name}
            relationship="Best Friend"
          ></FriendCard>
        </Pressable>
      );
    });

    return <ScrollView>{res}</ScrollView>;
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "white",
      }}
    >
      <TopBar
        title="Common Interests"
        type={true}
        style={{
          flex: 1,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      />
      <View style={{ flex: 5, paddingLeft: 25, paddingRight: 25 }}>
        <ScrollView style={{ width: "100%" }} horizontal={true}>
          <View style={styles.topRow}>{feed()}</View>
        </ScrollView>
        {friendLists()}
      </View>

      <Button
        title="Add Contact"
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 15,
    fontFamily: "CircularStd-Medium",
  },
  avatars: {
    width: 65,
    height: 65,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: "white",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#C1C7D0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  camera: {
    fontSize: 50,
  },
  field: {
    fontSize: 18,
    fontFamily: "CircularStdMedium",
    marginBottom: 12,
  },
  iconBackground: {
    width: 42,
    height: 42,
    borderRadius: 42,
    marginRight: 16,
    backgroundColor: "#EBECF0",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
  },
  saveBtn: {
    marginTop: 12,
    marginBottom: 20,
    width: "100%",
    borderRadius: 7,
  },
  topRow: {
    height: 85,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingBottom: 12,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DFE1E6",
  },
  gradient: {
    width: 69,
    height: 69,
    borderRadius: 34.5,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InterestScreen;
