import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Animated} from 'react-native';
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
  Plus_Icon,
} from '../../assets/index';
import {ThemeColors} from '../../theme';
import styles from './styles';

const Footer = props => {
  const [state, setState] = useState({
    rotate: false,
    animateCross: new Animated.Value(0),
  });

  const rotation = state.animateCross.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '130deg'],
    useNativeDriver: true,
  });

  const animateIn = () => {
    Animated.timing(
      Animated.timing(state.animateCross, {toValue: 1, duration: 2000}).start(),
    ).start();
  };

  return (
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

        <TouchableOpacity style={styles.addBtn}>
          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <Plus_Icon />
          </Animated.View>
        </TouchableOpacity>

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
  );
};

export default Footer;
