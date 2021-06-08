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
import { SearchBar } from "react-native-elements";
import TopBar from "./header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AddContact(props) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [profile, setProfilePicture] = useState();
  const [relation, setRelationship] = useState();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ alignItems: "flex-start" }}>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={styles.avatar}>
              <MaterialCommunityIcons style={styles.camera} name="camera" />
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "flex-start" }}>
            <Text style={styles.field}>Name</Text>
            <View
              style={{
                width: "100%",
                paddingBottom: 12,
                marginBottom: 16,
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#DFE1E6",
              }}
            >
              <View style={styles.iconBackground}>
                <MaterialCommunityIcons style={styles.icon} name="pencil" />
              </View>
              <TextInput
                placeholder="Add Name"
                style={{ height: 42, width: "100%" }}
                onChangeText={setName}
              />
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "flex-start" }}>
            <Text style={styles.field}>Phone</Text>
            <View
              style={{
                width: "100%",
                paddingBottom: 12,
                marginBottom: 16,
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#DFE1E6",
              }}
            >
              <View style={styles.iconBackground}>
                <MaterialCommunityIcons style={styles.icon} name="phone" />
              </View>
              <TextInput
                placeholder="Add Phone"
                style={{ height: 42, width: "100%" }}
                onChangeText={setPhone}
              />
            </View>
          </View>

          <View style={{ width: "100%", alignItems: "flex-start" }}>
            <Text style={styles.field}>Email</Text>
            <View
              style={{
                width: "100%",
                paddingBottom: 12,
                marginBottom: 16,
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#DFE1E6",
              }}
            >
              <View style={styles.iconBackground}>
                <MaterialCommunityIcons style={styles.icon} name="email" />
              </View>
              <TextInput
                placeholder="Add Email"
                style={{ height: 42, width: "100%" }}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "flex-start" }}>
            <Text style={styles.field}>Profile Picture</Text>
            <View
              style={{
                width: "100%",
                paddingBottom: 12,
                marginBottom: 16,
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#DFE1E6",
              }}
            >
              <View style={styles.iconBackground}>
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="account-circle"
                />
              </View>
              <TextInput
                placeholder="Add Profile Picture"
                style={{ height: 42, width: "100%" }}
                onChangeText={setProfilePicture}
              />
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "flex-start" }}>
            <Text style={styles.field}>Relationship</Text>
            <View
              style={{
                width: "100%",
                paddingBottom: 12,
                marginBottom: 16,
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#DFE1E6",
              }}
            >
              <View style={styles.iconBackground}>
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="account-multiple"
                />
              </View>
              <TextInput
                placeholder="Add Relationship"
                style={{ height: 42, width: "100%" }}
                onChangeText={setRelationship}
              />
            </View>
          </View>
          <View style={styles.saveBtn}>
            <Button
              color="#97A0AF"
              title="Save"
              onPress={() => {
                props.navigation.navigate("Interests");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 15,
    fontFamily: "CircularStd-Medium",
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
});
