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
import Identity from './screens/home/Identity/IdentityMain/Identity';
import IdentityDetailsScreen from './screens/home/Identity/IdentityDetails/IdentityDetailsScreen';
import Tax from './screens/home/Identity/TaxScreens/Tax';
import Passport from './screens/home/Identity/PassportScreens/Passport';
import Tour from './screens/home/Identity/TourScreens/Tour';
import Membership from './screens/home/Identity/MembershipScreens/Membership';
import DL from './screens/home/Identity/DLScreens/DL';
import RecordsMain from './screens/home/Records/RecordsMain/RecordsMain';
import MedicalReports from './screens/home/Records/MedicalReports/MedicalReports';
import Insurance from './screens/home/Records/Insurance/Insurance';
import Certificate from './screens/home/Records/Certificate/Certificate';
import Invoice from './screens/home/Records/Invoice/Invoice';
import Files from './screens/home/Files/Files';
import Bookmarks from './screens/home/Bookmarks/Bookmarks';
import FinanceMain from './screens/home/Finance/FinanceMain/FinanceMain';
import LoginsMain from './screens/home/Logins/LoginsMain/LoginsMain';
import BankAccount from './screens/home/Finance/BankAccount/BankAccount';
import Lender from './screens/home/Finance/Lender/Lender';
import CryptoWallet from './screens/home/Finance/CryptoWallet/CryptoWallet';

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
        <Stack.Screen name="Identity" component={Identity}/>
        <Stack.Screen name="Identity Details" component={IdentityDetailsScreen}/>
        <Stack.Screen name="Tax" component={Tax}/>
        <Stack.Screen name="DL" component={DL}/>
        <Stack.Screen name="Passport" component={Passport}/>
        <Stack.Screen name="Tour" component={Tour}/>
        <Stack.Screen name="Membership" component={Membership}/>
        <Stack.Screen name="Records" component={RecordsMain}/>
        <Stack.Screen name="Medical Reports" component={MedicalReports}/>
        <Stack.Screen name="Insurance" component={Insurance}/>
        <Stack.Screen name="Certificate" component={Certificate}/>
        <Stack.Screen name="Invoice" component={Invoice}/>
        <Stack.Screen name="Files" component={Files}/>
        <Stack.Screen name="Bookmarks" component={Bookmarks}/>
        <Stack.Screen name="Finance" component={FinanceMain}/>
        <Stack.Screen name="Logins" component={LoginsMain}/>
        <Stack.Screen name="BankAccounts" component={BankAccount}/>
        <Stack.Screen name="Lender" component={Lender}/>
        <Stack.Screen name="CryptoWallet" component={CryptoWallet}/>
        <Stack.Screen name="GeneratorScreen" component={GeneratorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
