import { Text, Image, View, TouchableOpacity } from 'react-native'
import React, {useRef} from 'react'
import { useTheme } from '../../../../config/context/ThemeContext';
import Feather from 'react-native-vector-icons/Feather';
import { createStyles } from './style';

const AccountScreenComponent = ({ closeProfileSheet, clickSignIn }) => {
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
        <TouchableOpacity style={styles.profileSection} onPress={()=>clickSignIn()}>
          <Image source={require('../../../../assets/images/profile.png')} style={styles.userLogo} />
          <View style={styles.subSection}>
          <Text style={styles.signInText}>Sign In</Text>
          <Feather name="chevron-right" size={20} color="black" />
          </View>
        </TouchableOpacity>

        {/* settings section */}
        <View style={styles.settingSection}>

        </View>

        {/* more about */}

      </View>
    </>

  )
}

export default AccountScreenComponent

