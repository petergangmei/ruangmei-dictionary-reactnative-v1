import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../config/context/ThemeContext';
import { createStyles } from './style';


const ContinueWithEmail = () => {
    const { theme } = useTheme();
    const styles = createStyles(theme);
    return (
        <View style={styles.container}>
            <Text>Email *</Text>
            <TextInput style={styles.emailInput} />
            <View style={styles.continueBtnContainer}>
                <TouchableOpacity style={styles.continueBtn}>
                    <Text style={styles.continueBtnText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContinueWithEmail

const styles = StyleSheet.create({})