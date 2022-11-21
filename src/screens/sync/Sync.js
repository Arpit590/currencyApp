import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import PrimaryButton from '../../Atoms/PrimaryButton';
import { FontFamily, ThemeColors } from '../../theme';
import styles from './styles';

const SyncScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.headerTxt}>Sync</Text>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.description}>In Freeplan your vault will sync at 12.00AM everyday. If you want emergency sync please upgrade your account or click the <Text style={{fontFamily:FontFamily.secondaryBold, color:ThemeColors.textPrimary}}>EMERGENCY SYNC</Text> button.</Text>
          <PrimaryButton
          title="EMERGENCY SYNC"
          buttonHandler={()=>{}}
          />
        </View> 
        <View style={styles.view2}>
          <Text style={styles.heading}>Sync History</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.history}>
              <View style={styles.historyLogo}></View>
              <View style={styles.historyContent}>
                <Text style={styles.historyHeading}>Regular Sync</Text>
                <Text style={styles.historyDesc}>12th Jan 2022, 12.00 AM</Text>
              </View>
            </View>
            <View style={styles.history}>
              <View style={[styles.historyLogo, {backgroundColor:"#9F1D27"}]}></View>
              <View style={styles.historyContent}>
                <Text style={styles.historyHeading}>Emergency Sync</Text>
                <Text style={styles.historyDesc}>12th Jan 2022, 12.00 AM</Text>
              </View>
            </View>
            <View style={styles.history}>
              <View style={styles.historyLogo}></View>
              <View style={styles.historyContent}>
                <Text style={styles.historyHeading}>Regular Sync</Text>
                <Text style={styles.historyDesc}>12th Jan 2022, 12.00 AM</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SyncScreen;
