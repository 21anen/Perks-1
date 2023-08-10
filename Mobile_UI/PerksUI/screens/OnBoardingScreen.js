import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Colors from "../constants/Colors";
const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title:
      "Organize, find, and enjoy your loyalty cards in a more modern and dynamic way",
  },
  {
    id: "2",
    title: "Organize, find, and enjoy your loyalty cards in a more modern and dynamic way",
  },
  {
    id: "3",
    title: "Organize, find, and enjoy your loyalty cards in a more modern and dynamic way",
  },
];

const Slide = ({ item, currentSlideIndex }) => {
  return (
    <View style={{ alignItems: "center", width: 300 }}>
      <Text style={styles.title}>{item?.title}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        {/* Render indicator */}
        {/* {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: "white",
                width: 25,
              },
            ]}
          />
        ))} */}
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <TouchableOpacity
          style={styles.signbtn}
          onPress={() => navigation.navigate("signup")}
        >
          <Text
            style={{
              fontFamily: "montserrat-bold",
              fontSize: 23,
              color: "white",
            }}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => navigation.navigate("login")}
          style={styles.loginbtn}
        >
          <Text
            style={{
              fontFamily: "montserrat-bold",
              fontSize: 23,
              color: Colors.secondary,
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
      <StatusBar backgroundColor={Colors.primary} />
      <Image
        source={require("../assets/Ellipse1.png")}
        style={{
          position: "absolute",
          top: -57,
          left: -70,
          height: 170,
          width: 176,
          resizeMode: "contain",
          marginTop: 50,
        }}
      />
        <Image
        source={require("../assets/Ellipse2.png")}
        style={{
          position: "absolute",
          top: 100,
          left: 201,
          height: 283,
          width: 316,
          resizeMode: "contain",
          marginTop: 50,
        }}
      />
      <View style={styles.bordheader}>
        <Text
          style={{
            fontSize: 50,
            fontFamily: "montserrat-bold",
            color: "white",
          }}
        >
          PERKS
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontFamily: "montserrat-bold",
            color: "white",
            marginTop: 2,
          }}
        >
          Make most from reward points
        </Text>
      </View>
      <View style={styles.bordcard}>
        <View style={{ backgroundColor: '#0FC8F0', height:55, width:84, borderRadius:10,  marginTop: 50, }}>
        <Image
          source={require("../assets/card_vector.png")}
          style={{
            height: 56,
            width: 85,
            resizeMode: "contain",
          }}
        />
        </View>
      
        <View style={{ flex: 1 }}>
          <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            contentContainerStyle={{ height: height * 0.8 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={slides}
            
            renderItem={({ item }) => (
              <Slide item={item} currentSlideIndex={currentSlideIndex} />
            )}
          />
        </View>
        <View style={{ flex: 1, top: height*0.35 , position:'absolute'}}>
          <Footer />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bordheader: {
    marginTop: 83,
    justifyContent: "center",
    alignItems: "center",
  },
  bordcard: {
    position: "absolute",
    top: 250,
    backgroundColor: "white",
    borderTopRightRadius: 67,
    borderTopLeftRadius: 67,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: Colors.secondary,
    fontSize: 18,
    fontFamily: "montserrat-medium",
    marginTop: 30,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  signbtn: {
    flex: 1,
    height: 62,
    width: 280,
    borderRadius: 50,
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  loginbtn: {
    flex: 1,
    height: 62,
    borderRadius: 50,
    marginTop: 10,
    borderWidth: 5,
    borderColor: Colors.secondary,
    width: 280,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OnboardingScreen;
