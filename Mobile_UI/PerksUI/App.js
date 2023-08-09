import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnBoardingScreen';
import BottomNavigator from './navigation/AppNavigator';
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({});
};

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  const [fontsLoaded] = useFonts({
    "montserrat-black": require("./assets/fonts/Montserrat/static/Montserrat-Black.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    "montserrat-semibold": require("./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    "montserrat-extrabold": require("./assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf"),
    "montserrat-extralight": require("./assets/fonts/Montserrat/static/Montserrat-ExtraLight.ttf"),
    "montserrat-Light": require("./assets/fonts/Montserrat/static/Montserrat-Light.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    "montserrat-medium": require("./assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    "montserrat-thin": require("./assets/fonts/Montserrat/static/Montserrat-Thin.ttf"),
  });

  
  const loadfsc = async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  }

  React.useEffect( () => {
  loadfsc()
    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,
        }}
         
        >
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="HomeScreen" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
