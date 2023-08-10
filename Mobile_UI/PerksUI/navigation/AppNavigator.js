import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="explore"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          position: "absolute",
          // bottom: 10,
          height: 82,
          paddingBottom: 20,
          width: "100%",
          // marginLeft: 20,
          borderTopWidth:0,
          elevation:0,
          borderTopColor:'white'
          
        },
        tabBarShowLabel:false,
        headerShown: false,

      }}
      sceneContainerStyle={{
        marginBottom:82,
        backgroundColor:'white'
      }}
      
    >
      <Tab.Screen
        name="explore"
        component={HomeScreen}
        options={{
         
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle"  style={{marginLeft:50, marginTop:-20}} color={color} size={42} />
          ),
          
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold", fontFamily:"inter-bold" },
        }}
      />
      <Tab.Screen
        name="WishList"
        component={HomeScreen}
        options={{
          tabBarLabel: "WishList",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={Colors.secondary}
              style={{position: "absolute", top:-30,}}
              size={82}
            />
          ),

          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold", fontFamily:"inter-bold", },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="card-text"
              color={color}
              style={{marginLeft:-50, marginTop:-20}}
              size={42}
            />
          ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold", fontFamily:"inter-bold" },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
