import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Story({ title, context, image_url }) {
  return (
    <View style={styles.cardStyle}>
      <View
        style={{
          flex: 4.5,
          flexDirection: "column",
          justifyContent: "center",
          paddingRight: 12,
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.small}>Based on {context}</Text>
      </View>
      <View style={{ flex: 1.5 }}>
        <Image style={styles.image} source={{ uri: image_url }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    paddingBottom: 12,
    minHeight: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF0",
  },
  title: {
    fontSize: 15,

    paddingBottom: 5,
  },
  subtitle: {
    fontSize: 13,
    paddingBottom: 5,
  },
  small: {
    fontSize: 13,
    color: "#A5ADBA",
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 4,
  },
});
