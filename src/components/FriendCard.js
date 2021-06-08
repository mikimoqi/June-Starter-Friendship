import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function FriendCard(props) {
  return (
    <View style={styles.cardStyle}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
          }}
        />
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.relationship}>
            {props.relationship ? "Best Friend" : "Not Specified"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF0",
  },
  avatar: {
    width: 57,
    height: 57,
    borderRadius: 57,
    marginRight: 15,
  },
  name: {
    fontSize: 13,
    fontFamily: "CircularStdMedium",
    paddingBottom: 5,
  },
  relationship: {
    fontSize: 13,
    color: "#8E8E93",
    fontFamily: "CircularStd",
  },
  star: {
    fontSize: 25,
    color: "#FFCC00",
  },
});
