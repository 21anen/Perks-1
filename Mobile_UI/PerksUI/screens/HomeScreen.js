import { Avatar,Icon } from "@rneui/themed";
import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { SCREEN_WIDTH } from "../constants/UiData";
const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:20, padding:15 }}>
        <Avatar
          size={52}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
        />
        <View>
          <Text style={styles.header}>
          Hello, Karim!
          </Text>
        </View>
      </View>
      <View>
    
      <View style={{flexDirection:'row', justifyContent:'space-between', padding:15}}>
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

          <View style={{flexDirection:'row'}}>
          <Icon
        name='notifications'
        size={40}
        // style={{marginLeft:-23,marginTop:-45 }}
        />
           <Icon
        name='settings'
        size={40}
        // style={{marginLeft:-23,marginTop:-45 }}
        />
          </View>
      </View>
      </View>
      <View style={styles.homecontview}>

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
    marginTop:5,
    marginLeft:10
  },
  histbtn: {
    height: 28,
    borderRadius: 50,
    borderWidth:2,
    borderColor:Colors.primary,
    width: 106,
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
  },
  homecontview:{
    borderRadius: 80,
    backgroundColor:'#D9D9D9',
    width:'100%',
    height:468,
  }

});
