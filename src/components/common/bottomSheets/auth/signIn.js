import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import logoImage from '../../../../assets/images/logo.png';
import { useTheme } from '../../../../config/context/ThemeContext';
import { createStyles } from './style';
import ContinueWithEmail from './continueWithEmail';

const SignInBottomSheet = ({ close }) => {
  const [continueWithEmailActive, setContinueWithEmailActive] = useState(true);

  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View>
      {continueWithEmailActive ?<View style={styles.navBarWithEmail}>
        <TouchableOpacity onPress={() => setContinueWithEmailActive(false)}>
          <Feather name="chevron-left" size={wp('7%')} color="black" />
        </TouchableOpacity>
        <Text style={styles.registerLoginText}>Register or Login</Text>
      </View>: <View style={styles.navBar}>
        <TouchableOpacity onPress={() => close()}>
          <Ionicons name="close-outline" size={wp('7%')} color="black" />
        </TouchableOpacity>
      </View>}
      {continueWithEmailActive ? <ContinueWithEmail/> : <View>
        {/* Logo section */}
        <View style={styles.logoSection}>
          <Image source={logoImage} style={styles.logoImage} />
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>

        {/* descrption section */}
        <View style={styles.descritpion}>
          <Text style={styles.descText}>Join the Ruangmei Diectionary Community today</Text>
        </View>

        {/* login methods */}
        <View style={styles.loginMethodsContainer}>
          {/* signin with email  */}
          <TouchableOpacity style={styles.continueWithEmail} onPress={() => setContinueWithEmailActive(true)}>
            <Text style={styles.signWithEmailText}>Continue with  Email</Text>
          </TouchableOpacity>
        </View>
      </View>}

    </View>
  )
}

export default SignInBottomSheet
