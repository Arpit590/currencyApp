import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontFamily, FontSizes, ThemeColors } from '../theme'

const PrimaryButton = ({title, buttonHandler}) => {

  return (
    <TouchableOpacity
    activeOpacity={0.8} 
    onPress={buttonHandler}
    style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:ThemeColors.primary,
        borderRadius:50,
        width:"100%",
        padding:16
    },
    text:{
        fontFamily:FontFamily.primaryBold,
        fontSize:FontSizes.large,
        color:ThemeColors.textPrimary,
        textAlign:"center"
    }
})