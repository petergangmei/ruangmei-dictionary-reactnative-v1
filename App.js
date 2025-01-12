import React from 'react'
import AppNavigator from './src/config/navigation'
// import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from './src/config/context/ThemeContext'
import store from './src/config/redux/store';
import {Provider} from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  // const { theme } = useTheme(); 

  return (
    <>
      <Provider store={store}>
      <ThemeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppNavigator />
        </GestureHandlerRootView>
      </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
