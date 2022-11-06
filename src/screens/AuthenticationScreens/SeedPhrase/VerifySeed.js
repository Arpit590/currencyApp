import {
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  import styles from './styles';
  import {useNavigation, useRoute} from '@react-navigation/native';
  import PrimaryButton from '../../../Atoms/PrimaryButton';
  import ModalView from '../../../Atoms/ModalView';
  import LockIcon from '../../../assets/Lock.svg';
  import ResetIcon from '../../../assets/Reset.svg';
  import SupportIcon from '../../../assets/Support.svg';
  import ClipIcon from "../../../assets/Clip.svg";
  import ClipIcon1 from "../../../assets/Clip1.svg";
  import CheckBox from 'react-native-check-box';
import { ThemeColors } from '../../../theme';
  
  const VerifySeed = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [openModal, setOpenModal] = useState(false);
    const [active, setActive] = useState(false);
    const [check, setCheck]= useState(false);
  
    const verificationHandler = () => {
      navigation.navigate('AddFinger');
    };

    const copyHandler=()=>{
        setActive(true);
        ToastAndroid.show("Copied to clipboard", ToastAndroid.CENTER)
    }
  
    return (
      <View style={styles.screen}>
        <View style={styles.view}>
          <Text style={styles.heading}>Verify Seed Phrase</Text>
          <Text style={styles.text}>
            An email with a verification link and code has been sent to{' '}
            {route?.params?.email}
          </Text>
          <View style={styles.view1}>
            <Text style={styles.text1}>Seed Phrase</Text>
            <View style={styles.seedPhrase}>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.seedBox}>
                    <Text style={styles.seedText1}>1</Text>
                    <Text style={styles.seedText}>bring</Text>
                </TouchableOpacity>
            </View>
            {/* <TouchableOpacity activeOpacity={0.8} 
            onPress={copyHandler}
            style={styles.clip}>
                {active ? <ClipIcon1/> : <ClipIcon/>}
                <Text style={active ?styles.copyText1 : styles.copyText}>{active ? "Copied to clipboard" : "Copy to clipboard"}</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.view2}>
          <PrimaryButton title="Continue" buttonHandler={verificationHandler} />
          <TouchableOpacity
            onPress={() => setOpenModal(true)}
            activeOpacity={0.8}>
            <Text style={styles.help}>Need Help ?</Text>
          </TouchableOpacity>
        </View>
        <ModalView openModal={openModal} onClose={() => setOpenModal(false)}>
          <View style={styles.modal}>
            <Text style={[styles.help, {color: '#BBBAB3', textAlign: 'left'}]}>
              Need Help ?
            </Text>
            <View style={{marginTop: 30}}>
              <TouchableOpacity
                onPress={() => {
                  setOpenModal(false);
                }}
                activeOpacity={0.8}
                style={styles.container}>
                <LockIcon />
                <Text style={styles.containerText}>Forgot Master Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setOpenModal(false);
                }}
                activeOpacity={0.8}
                style={styles.container}>
                <SupportIcon />
                <Text style={styles.containerText}>Support</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setOpenModal(false);
                }}
                activeOpacity={0.8}
                style={styles.container}>
                <ResetIcon />
                <Text style={[styles.containerText, {marginLeft: 15}]}>
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ModalView>
      </View>
    );
  };
  
  export default VerifySeed;
  