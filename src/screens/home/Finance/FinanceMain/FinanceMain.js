import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import styles from './styles';
import CloseIcon from "../../../../assets/Close.svg";
import { useNavigation } from '@react-navigation/native';
import AddIcon from "../../../../assets/Add.svg";
import BAIcon from "../../../../assets/BA.svg";
import CryptoIcon from "../../../../assets/Crypto.svg";
import CardsIcon from "../../../../assets/Cards.svg";
import LedgerIcon from "../../../../assets/Ledger.svg";

const FinanceMain = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <CloseIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Finance</Text>
        <View></View>
      </View>
      <View style={styles.view1}>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <BAIcon/>
                </View>
                <Text style={styles.text}>Bank Account</Text>
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("BankAccounts")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <CardsIcon/>
                </View>
                <Text style={styles.text}>Cards</Text>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Tax")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <CryptoIcon/>
                </View>
                <Text style={styles.text}>Crypto Wallet</Text>
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("CryptoWallet")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={styles.logo}>
                    <LedgerIcon/>
                </View>
                <Text style={styles.text}>Lender</Text>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Lender")}
            activeOpacity={0.8}>
                <AddIcon/>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default FinanceMain
