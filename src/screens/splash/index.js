// Import necessary components and libraries
import React, { useEffect } from 'react'; 
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useTheme } from '../../config/context/ThemeContext'

const SplashScreen = () => {
  const { theme, toggleTheme, isDarkMode } = useTheme(); // Get theme context
  const navigation = useNavigation(); 
  // Navigate to the 'Login' screen after 2 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Dictionary'); 
    }, 1800);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [navigation]); // Dependency array ensures the effect runs only once

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Lottie Animation */}
      <LottieView
        style={{
          width: '60%',
          height: '60%',
        }}
        source={require('../../assets/anim/splash-anim.json')} 
        autoPlay
        loop={false}
      />
    </View>
  );
};

export default SplashScreen;

// Styles for the container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
