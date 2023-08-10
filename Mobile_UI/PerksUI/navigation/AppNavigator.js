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
          shadowColor:'white',
          
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
            <MaterialCommunityIcons name="account-circle" color={color} size={42} />
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
              size={62}
            />
          ),

          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold", fontFamily:"inter-bold",top:-30, position:'absolute'  },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
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
