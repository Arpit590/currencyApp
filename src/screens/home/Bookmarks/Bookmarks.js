import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import BackIcon from "../../../assets/Back.svg"; 
import ArrowDownIcon from "../../../assets/ArrowDown.svg";
import EyeInActiveIcon from "../../../assets/EyeInActive.svg";
import DatePicker from 'react-native-date-picker';
import PrimaryButton from "../../../Atoms/PrimaryButton";
import BookmarkIcon from "../../../assets/BookMark.svg";


const Bookmarks = () => {

    const navigation = useNavigation();
    const [showPass, setShowPass] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [country, setCountry] = useState("");
    const [open, setOpen] = useState(false);
    const [expiryDate, setExpiryDate]= useState(new Date());

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.heading}>Bookmark</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Website Name</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Website Name'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
            </View>
        </View>
        <View style={styles.formContent}>
            <Text style={styles.formText}>Website Link</Text>
            <View style={styles.input}>
              <TextInput
              placeholder='Website Link'
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              />
              <TouchableOpacity activeOpacity={0.8}>
                <BookmarkIcon/>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
      <View style={{marginHorizontal:20}}>
        <PrimaryButton
        title="Add New"
        buttonHandler={()=>{}}
        />
      </View>
    </View>
  )
}

export default Bookmarks
