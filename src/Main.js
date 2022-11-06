import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {ThemeColors} from './theme';
import OnBoarding from './screens/onBoarding/OnBoarding';
import SignupScreen from './screens/AuthenticationScreens/SignupScreen/SignupScreen';
import VerificationScreen from './screens/AuthenticationScreens/VerificationScreen/VerificationScreen';
import ReadyScreen from './screens/AuthenticationScreens/ReadyScreen/ReadyScreen';
import Navigation from './navigation/Navigation';
import HomeScreen from './screens/home/Home';
import ProfileScreen from './screens/profile/Profile';
import ExploreScreen from './screens/explore/Explore';
import GeneratorScreen from './screens/generator/Generator';
import SeedPhrase from './screens/AuthenticationScreens/SeedPhrase/SeedPhrase';
import VerifySeed from './screens/AuthenticationScreens/SeedPhrase/VerifySeed';
import CreatePin from './screens/AuthenticationScreens/CreatePin/CreatePin';
import AddFingerPrint from './screens/AuthenticationScreens/AddFingerPrint/AddFingerPrint';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor={ThemeColors.primary}
      />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="OnBoarding">
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Seed" component={SeedPhrase} />
        <Stack.Screen name="VerifySeed" component={VerifySeed} />
        <Stack.Screen name="AddFinger" component={AddFingerPrint} />
        <Stack.Screen name="CreatePin" component={CreatePin} />
        <Stack.Screen name="Ready" component={ReadyScreen} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
        <Stack.Screen name="GeneratorScreen" component={GeneratorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
