import { Avatar, Icon, Slider } from "@rneui/themed";
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Colors from "../constants/Colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/UiData";
import LinearGradient from "react-native-linear-gradient";

const RewardSlide = ({ item }) => {
  return (
    <View
      style={{
        width: 94,
        height: 130,
        backgroundColor: "#F8F8F8",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:32,
        marginRight:3
      }}
    >
      <Text
        style={{
          fontFamily: "montserrat-bold",
          fontSize: 30,
          color: "#D1D1D1",
        }}
      >
        {item}
      </Text>
      <Text
        style={{
          fontFamily: "montserrat-bold",
          fontSize: 10,
          color: "#D1D1D1",
          marginTop:10
        }}
      >
        Redeem Now
      </Text>
      <Icon
        name="stop"
        type="font-awesome"
        size={5}
        reverse
        containerStyle={{marginTop:20  }}
        // color="#046CB7"
      />
    </View>
  );
};

const HomeScreen = () => {
  const gradientColors = ["#E9280E", "#046CB7"];
  const reward = [
    { id: 1, reward: 20 },
    { id: 2, reward: 40 },
    { id: 3, reward: 60 },
    { id: 4, reward: 80 },
    { id: 5, reward: 100 },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SCREEN_WIDTH);
    setCurrentSlideIndex(currentIndex);
  };

  const renderThumb = () => <View style={styles.thumb} />;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 20,
          padding: 15,
        }}
      >
        <Avatar
          size={52}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
        />
        <View>
          <Text style={styles.header}>Hello, Karim!</Text>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <TouchableOpacity
            // activeOpacity={0.3}
            // onPress={() => navigation.navigate("HomeScreen")}
            style={styles.histbtn}
          >
            <Text
              style={{
                fontFamily: "montserrat-bold",
                fontSize: 15,
                color: Colors.primary,
              }}
            >
              History
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <Icon
              name="notifications"
              size={40}
              // style={{marginLeft:-23,marginTop:-45 }}
            />
            <Icon
              name="settings"
              size={40}
              // style={{marginLeft:-23,marginTop:-45 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.homecontview}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 30,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/Ellipse18.png")}
              style={{
                height: 36,
                width: 24,
                resizeMode: "contain",
                marginRight: 15,
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: "montserrat-bold",
                  fontSize: 30,
                  color: Colors.secondary,
                }}
              >
                30
              </Text>
              <Text
                style={{
                  fontFamily: "montserrat-bold",
                  fontSize: 15,
                  color: Colors.secondary,
                }}
              >
                Reward Poits
              </Text>
            </View>
          </View>
          <TouchableOpacity
            // activeOpacity={0.3}
            // onPress={() => navigation.navigate("HomeScreen")}
            style={styles.offerbtn}
          >
            <Text
              style={{
                fontFamily: "montserrat-bold",
                fontSize: 15,
                color: Colors.accent,
              }}
            >
              OFFERS
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="#ccc"
            maximumValue={100}
            minimumTrackTintColor="#046CB7"
            minimumValue={0}
            onSlidingComplete={() => console.log("onSlidingComplete()")}
            onSlidingStart={() => console.log("onSlidingStart()")}
            onValueChange={(value) => console.log("onValueChange()", value)}
            orientation="horizontal"
            step={20}
            style={{ width: "80%", height: 300 }}
            thumbStyle={{
              height: 30,
              width: 30,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            thumbProps={{
              children: (
                <Icon
                  name="stop"
                  type="font-awesome"
                  size={5}
                  reverse
                  containerStyle={{ bottom: 1, right: 5 }}
                  color="#046CB7"
                />
              ),
            }}
            thumbTintColor="#046CB7"
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{
              height: 30,
              borderRadius: 20,
              color: "#046CB7",
            }}
            value={50}
          />
          <View
            style={{ flexDirection: "row", marginLeft: 60, marginTop: -120 }}
          >
            <Text
              style={{
                fontFamily: "montserrat-bold",
                fontSize: 15,
                color: Colors.secondary,
                marginRight: 40,
              }}
            >
              20
            </Text>
            <Text
              style={{
                fontFamily: "montserrat-bold",
                fontSize: 15,
                color: Colors.secondary,
                marginRight: 40,
              }}
            >
              40
            </Text>
            <Text
              style={{
                fontFamily: "montserrat-bold",
                fontSize: 15,
                color: Colors.secondary,
                marginRight: 40,
              }}
            >
              60
            </Text>
            <Text
              style={{
                fontFamily: "montserrat-bold",
                fontSize: 15,
                color: Colors.secondary,
                marginRight: 40,
              }}
            >
              80
            </Text>
            <Text
              style={{
                fontFamily: "montserrat-bold",
                fontSize: 15,
                color: Colors.secondary,
              }}
            >
              100
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 15, position: "absolute", top: SCREEN_HEIGHT * 0.35 }}>
          <Text
            style={{
              fontFamily: "montserrat-bold",
              fontSize: 15,
              color: Colors.secondary,
            }}
          >
            Redeem your Reward Points
          </Text>
        </View>
        <View style={{ position: "absolute", top:SCREEN_HEIGHT * 0.4 , paddingHorizontal:15 }}>
          <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            contentContainerStyle={{ height: SCREEN_HEIGHT * 0.2 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={reward}
            
            renderItem={({ item }) => (
              <RewardSlide
                item={item.reward}
                currentSlideIndex={currentSlideIndex}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    height: 50,
    fontFamily: "montserrat-bold",
    fontSize: 25,
    marginTop: 5,
    marginLeft: 10,
  },
  histbtn: {
    height: 28,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.primary,
    width: 106,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  offerbtn: {
    height: 28,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.accent,
    width: 106,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  homecontview: {
    borderRadius: 80,
    backgroundColor: "#D9D9D9",
    width: "100%",
    flex: 1,
    height: 468,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -380,
  },
  slider: {
    width: "80%",
    height: 20,
  },
  track: {
    height: 10,
    borderRadius: 5,
  },
  gradientTrack: {
    height: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  thumb: {
    width: 16,
    height: 16,
    backgroundColor: "white",
    borderRadius: 8,
  },
});
