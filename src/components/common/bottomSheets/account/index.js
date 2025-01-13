import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from '../../../../config/context/ThemeContext';
// import { useTheme } from '../../../../config/context/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStyles } from './style';

const AccountScreenComponent = ({ closeProfileSheet }) => {
  const { theme } = useTheme();
    const styles = createStyles(theme);

  return (
    <>
      {/* navbar section  */}
      <View style={styles.navBar}>
        <Text style={styles.text}></Text>
        <Text style={styles.textAccount}>Account</Text>
        <TouchableOpacity onPress={closeProfileSheet}>
          <Text style={styles.textDone}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {/* profile section */}
        <View style={styles.profileSection}>
          <Text>Sign In</Text>
          <Ionicons name="person" size={wp('10%')} />

        </View>

        {/* settings section */}
        <View style={styles.settingSection}>

        </View>

        {/* more about */}

      </View>
    </>

  )
}

export default AccountScreenComponent

