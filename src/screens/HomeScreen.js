import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import TopBar from "../components/header.js";
import Story from "../components/Story";
import { SearchBar } from "react-native-elements";
import { NewsApi } from "../api/NewsApi";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  const [news, setNews] = useState(null);
  const [search, updateSearch] = useState();

  async function handlePress(url) {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  // async function suggestNews(interest) {
  //   const news = await NewsApi(interest);
  //   const articles = news.data.articles;
  //   setNews(articles);
  // }

  const story = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            handlePress(
              "https://www.crunchyroll.com/anime-news/2021/06/07/attack-on-titan-manga-thanks-fan-for-12-years-on-titan-sized-display-in-shinjuku-station"
            );
          }}
        >
          <Story
            title="Attack on Titan Manga Thanks Fans for 12 Years With Titan-Sized Display in Shinjuku Station"
            context="Anime"
            image_url="https://img1.ak.crunchyroll.com/i/spire1/815969f650795e27e4286efd398751981623050767_large.png"
          ></Story>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handlePress(
              "https://www.nba.com/news/fresh-faced-superstars-lead-nba-into-conference-semifinals"
            );
          }}
        >
          <Story
            title="Fresh-faced superstars lead NBA into conference semifinals"
            context="Basketball"
            image_url="https://cdn.nba.com/manage/2021/06/booker-mitchell-iso-1568x882.jpg"
          ></Story>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handlePress("https://www.firstpost.com/tag/badminton/page/2");
          }}
        >
          <Story
            title="All England Open 2021: Lee Zii Jia could prove worthy successor to Lee Chong Wei; Japanese armada scores big"
            context="Badminton"
            image_url="https://images.firstpost.com/wp-content/uploads/2021/03/AP21080523566400_opt.jpg?impolicy=website&width=640&height=362
            
            
            
            "
          ></Story>
        </TouchableOpacity>
      </View>
    );
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
        title="Newsfeed"
        type={false}
        style={{
          flex: 1,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      />
      <View style={{ flex: 5, paddingLeft: 25, paddingRight: 25 }}>
        <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          value={search}
          platform="default"
          lightTheme={true}
          containerStyle={{
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderWidth: 0,
            paddingLeft: 0,
            paddingRight: 0,
            backgroundColor: "white",
            borderColor: "white",
          }}
          inputContainerStyle={{
            backgroundColor: "#F6F6F6",
            borderRadius: 10,
            height: 36,
          }}
          inputStyle={styles.inptStyle}
        />

        <ScrollView style={{ width: "100%", height: "100%" }}>
          {story()}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: "white",
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

export default HomeScreen;
