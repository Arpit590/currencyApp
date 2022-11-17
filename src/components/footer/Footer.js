import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Animated, Modal} from 'react-native';
import {
  Home_Icon_Off,
  Home_Icon_On,
  Explore_Icon_On,
  Explore_Icon_Off,
  Generator_Icon_On,
  Generator_Icon_Off,
  Profile_Icon_On,
  Profile_Icon_Off,
  BottomTab_Icon,
  Plus_Icon
} from '../../assets/index';
import {ThemeColors} from '../../theme';
import CloseIcon from "../../assets/Close.svg";
import ContactsIcon from "../../assets/Contacts.svg";
import FilesIcon from "../../assets/Files.svg";
import IdentityIcon from "../../assets/Identity.svg";
import LoginsIcon from "../../assets/Logins.svg";
import RecordsIcon from "../../assets/Records.svg";
import BookMarksIcon from "../../assets/BookMarks.svg";
import FinanceIcon from "../../assets/Finance.svg";
import NotesIcon from "../../assets/Notes.svg";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Footer = props => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    rotate: false,
    animateCross: new Animated.Value(0),
  });
  const [openModal, setOpenModal] = useState(false);

  const rotation = state.animateCross.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '130deg'],
    useNativeDriver: true,
  });

  const animateIn = () => {
    Animated.timing(
      Animated.timing(state.animateCross, {
        toValue: 1, 
        duration: 1000, 
        useNativeDriver:false}).start(),
    ).start();
  };

  return (
    <>
    <View style={styles.footerContainer}>
      <BottomTab_Icon />
      <View style={styles.container}>
        <View
          style={{
            ...styles.iconContainer,
            backgroundColor:
              props.routeName !== 'Home'
                ? ThemeColors.white
                : ThemeColors.lightYellow,
          }}>
          <TouchableOpacity onPress={() => props.onChange('Home')}>
            {props.routeName !== 'Home' ? <Home_Icon_Off /> : <Home_Icon_On />}
          </TouchableOpacity>
          <Text
            style={props.routeName !== 'Home' ? styles.textOff : styles.textOn}>
            Home
          </Text>
        </View>
        <View
          style={{
            ...styles.iconContainer,
            backgroundColor:
              props.routeName !== 'Explore'
                ? ThemeColors.white
                : ThemeColors.lightYellow,
          }}>
          <TouchableOpacity onPress={() => props.onChange('Explore')}>
            {props.routeName !== 'Explore' ? (
              <Explore_Icon_Off />
            ) : (
              <Explore_Icon_On />
            )}
          </TouchableOpacity>
          <Text
            style={
              props.routeName !== 'Explore' ? styles.textOff : styles.textOn
            }>
            Explore
          </Text>
        </View>
      {(openModal===false) ?
        <TouchableOpacity
        onPress={()=>{
         setOpenModal(true)
        }}
        activeOpacity={0.8}
        style={styles.addBtn}>
          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <Plus_Icon />
          </Animated.View>
        </TouchableOpacity>
        :
        <TouchableOpacity
        onPress={()=>setOpenModal(false)}
        activeOpacity={0.8}
        style={styles.addBtn}>
          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <CloseIcon/>
          </Animated.View>
        </TouchableOpacity>
        }
        <View
          style={{
            ...styles.iconContainer,
            backgroundColor:
              props.routeName !== 'Generator'
                ? ThemeColors.white
                : ThemeColors.lightYellow,
          }}>
          <TouchableOpacity onPress={() => props.onChange('Generator')}>
            {props.routeName !== 'Generator' ? (
              <Generator_Icon_Off />
            ) : (
              <Generator_Icon_On />
            )}
          </TouchableOpacity>
          <Text
            style={
              props.routeName !== 'Generator' ? styles.textOff : styles.textOn
            }>
            Generator
          </Text>
        </View>
        <View
          style={{
            ...styles.iconContainer,
            backgroundColor:
              props.routeName !== 'Profile'
                ? ThemeColors.white
                : ThemeColors.lightYellow,
          }}>
          <TouchableOpacity onPress={() => props.onChange('Profile')}>
            {props.routeName !== 'Profile' ? (
              <Profile_Icon_Off />
            ) : (
              <Profile_Icon_On />
            )}
          </TouchableOpacity>
          <Text
            style={
              props.routeName !== 'Profile' ? styles.textOff : styles.textOn
            }>
            Profile
          </Text>
        </View>
      </View>
    </View>
        <Modal
        animationType='fade'
        visible={openModal}
        onRequestClose={()=>setOpenModal(false)}
        transparent={true}
        style={{zIndex:-100}}
        >
          <View
          style={styles.modal}>
              <View style={styles.modalBox}>
                <View style={styles.view1}>
                  <TouchableOpacity
                  onPress={()=>{
                    setOpenModal(false);
                    navigation.navigate("Identity")
                  }}
                  activeOpacity={0.8} style={styles.box}>
                    <IdentityIcon/>
                    <Text style={styles.boxText}>Identity</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={()=>{
                    setOpenModal(false)
                    navigation.navigate("Bookmarks")
                  }}
                  activeOpacity={0.8} style={styles.box}>
                    <BookMarksIcon/>
                    <Text style={styles.boxText}>BookMarks</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={()=>{
                    setOpenModal(false);
                    navigation.navigate("Files")
                  }}
                  activeOpacity={0.8} style={styles.box}>
                    <FilesIcon/>
                    <Text style={styles.boxText}>Files</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={()=>{
                    setOpenModal(false);
                    navigation.navigate("Records")
                  }}
                  activeOpacity={0.8} style={styles.box}>
                    <RecordsIcon/>
                    <Text style={styles.boxText}>Records</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>{
                    setOpenModal(false)
                  }}
                  activeOpacity={0.8} style={styles.box}>
                    <ContactsIcon/>
                    <Text style={styles.boxText}>Contacts</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>{
                    setOpenModal(false)
                    navigation.navigate("Finance")
                  }}
                  activeOpacity={0.8} style={styles.box}>
                    <FinanceIcon/>
                    <Text style={styles.boxText}>Finance</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={()=>{
                    setOpenModal(false)
                  }}
                  activeOpacity={0.8} style={styles.box}>
                    <NotesIcon/>
                    <Text style={styles.boxText}>Notes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>{
                    setOpenModal(false);
                    navigation.navigate("Logins")
                  }}
                  activeOpacity={0.8} style={styles.box}>
                    <LoginsIcon/>
                    <Text style={styles.boxText}>Logins</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
        </Modal>
        </>
  );
};

export default Footer;
