import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const AccountScreenComponent = ({closeProfileSheet}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
      <Text style={styles.text}></Text>
      <Text style={styles.textAccount}>Account</Text>
      <TouchableOpacity onPress={closeProfileSheet}>
        <Text style={styles.textDone}>Done</Text>
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default AccountScreenComponent

const styles = StyleSheet.create({
    navBar: {
        width: wp('100%'),
        height: hp('5%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp('5%'),
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor:'yellow',
        // backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    textAccount: {
        fontSize: 20,
    },
    textDone: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue',
    },  
})