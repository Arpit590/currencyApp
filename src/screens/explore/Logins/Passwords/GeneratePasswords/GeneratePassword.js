import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Switch} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import {Refresh} from '../../../../../assets';
import styles from './styles';
import {ThemeColors} from '../../../../../theme';
import BackIcon from '../../../../../assets/Back.svg';
import {useNavigation} from '@react-navigation/native';

const GeneratorScreen = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    sliderValue: 25,
    isEnabled: true,
    isEnabled1: true,
    isEnabled2: true,
    isEnabled3: true,
  });

  const toggleSwitch = () =>
    setState(prev => ({
      ...prev,
      isEnabled: !state.isEnabled,
    }));
  const toggleSwitch1 = () =>
    setState(prev => ({
      ...prev,
      isEnabled1: !state.isEnabled1,
    }));
  const toggleSwitch2 = () =>
    setState(prev => ({
      ...prev,
      isEnabled2: !state.isEnabled2,
    }));
  const toggleSwitch3 = () =>
    setState(prev => ({
      ...prev,
      isEnabled3: !state.isEnabled3,
    }));
  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Generator</Text>
        <View />
      </View>

      <View>
        <View style={styles.passwordContainer}>
          <Text style={styles.txtStyle}>Password Name</Text>
          <View style={styles.txtInputContainer}>
            <TextInput value="ajauehu283718o@3981%$9`26" />
            <TouchableOpacity>
              <Refresh />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.txtStyle}>
          Length: {parseInt(state?.sliderValue, 10)}
        </Text>
        <Slider
          value={state.sliderValue}
          minimumValue={1}
          maximumValue={30}
          thumbTintColor={ThemeColors.white1}
          trackStyle={{backgroundColor: ThemeColors.white1}}
          thumbStyle={styles.indicatorStyle}
          onValueChange={value =>
            setState(prev => ({
              ...prev,
              sliderValue: value,
            }))
          }
        />
        <View style={styles.switchContainer}>
          <Text style={styles.txtStyleToggle}>Digits</Text>
          <Switch
            trackColor={{false: '#767577', true: '#FFFCEC'}}
            thumbColor={state.isEnabled ? '#FFD700' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={state.isEnabled}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.txtStyleToggle}>Letters</Text>
          <Switch
            trackColor={{false: '#767577', true: '#FFFCEC'}}
            thumbColor={state.isEnabled1 ? '#FFD700' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={state.isEnabled1}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.txtStyleToggle}>Symbols</Text>
          <Switch
            trackColor={{false: '#767577', true: '#FFFCEC'}}
            thumbColor={state.isEnabled2 ? '#FFD700' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={state.isEnabled2}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.txtStyleToggle}>Similar Characters</Text>
          <Switch
            trackColor={{false: '#767577', true: '#FFFCEC'}}
            thumbColor={state.isEnabled3 ? '#FFD700' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={state.isEnabled3}
          />
        </View>
      </View>
    </View>
  );
};

export default GeneratorScreen;
