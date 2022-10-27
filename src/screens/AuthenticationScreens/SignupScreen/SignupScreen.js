import { Text, View, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles'
import { FontFamily, FontSizes, ThemeColors } from '../../../theme'
import PrimaryButton from '../../../Atoms/PrimaryButton'
import SecondaryButton from '../../../Atoms/SecondaryButton'
import { useState } from 'react'

const signupScreen = () => {

    const [login, setLogin] = useState(false);

    const loginHandler=()=>{
        setLogin(true);
    }

    const signupHandler=()=>{
        setLogin(false);
    }

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <Text style={styles.heading}>{login ? "Welcome Back !" : "Let’s get started !"}</Text>
        <View style={styles.box}>
            <View style={styles.view1}>
                <Text style={styles.text}>Email Address</Text>
                <TextInput
                placeholder='Email Address'
                placeholderTextColor="#BBBAB3"
                keyboardType='email-address'
                style={styles.input}
                />
            </View>
            <View style={styles.view1}>
                <Text style={styles.text}>Master Password</Text>
                <TextInput
                placeholder='Master Password'
                placeholderTextColor="#BBBAB3"
                secureTextEntry={true}
                style={styles.input}
                />
                {(!login) && <Text style={styles.info}>The only password you need to remember</Text>}
            </View>
            {(!login) && <View style={styles.view1}>
                <Text style={styles.text}>Confirm Master Password</Text>
                <TextInput
                placeholder='Confirm Master Password'
                placeholderTextColor="#BBBAB3"
                secureTextEntry={true}
                style={styles.input}
                />
            </View>}
        </View>
        <View style={styles.view2}>
            <Text style={[styles.info, {fontSize:FontSizes.normal, maxWidth:350, marginBottom:20}]} numberOfLines={2}>By using hushkey, you agree to its <Text style={{color:ThemeColors.textPrimary, fontFamily: FontFamily.secondaryBold}}>terms of use.</Text></Text>
            <PrimaryButton
            title={login ? "Login" :"Create My Account"}
            buttonHandler={()=>{}}
            />
            <View style={{marginTop:15}}>
                <SecondaryButton
                title={login ? "Create My Account" : "Login"}
                buttonHandler={login ? signupHandler : loginHandler}
                />
            </View>
            <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.help}>Need Help ?</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default signupScreen