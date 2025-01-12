import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Import Screens
import SplashSreen from '../../screens/splash';
import LoginScreen from '../../screens/auth/login';
import DictionaryScreen from '../../screens/dictionary/home';
import SearchScreen from '../../screens/dictionary/search';
import FavoriteScreen from '../../screens/dictionary/favorites';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name="Splash" component={SplashSreen} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false, animation: 'fade'}} />
        <Stack.Screen name="Dictionary" component={DictionaryScreen} options={{headerShown: false, animation: 'fade'}} />
        <Stack.Screen name="Favorites" component={FavoriteScreen} options={{headerShown: false, animation: 'fade'}} />
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;