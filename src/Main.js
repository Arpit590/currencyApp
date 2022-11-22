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
import Cards from './screens/home/Finance/Cards/Cards';
import BankAccountMain from './screens/explore/Finance/BankAccountMainScreens/BankAccount/BankAccountMain';
import BankAccountEdit from './screens/explore/Finance/BankAccountMainScreens/BankAccountEditScreens/BankAccountEdit';
import CardsMainScreen from './screens/explore/Finance/CardsMainScreens/CardsScreen/CardsScreen';
import CardsEditScreen from './screens/explore/Finance/CardsMainScreens/CardsEditScreens/CardsEditScreen';
import CryptoMainScreen from './screens/explore/Finance/CryptoMainScreens/CrpytoScreens/CryptoMainScreen';
import CryptoEditScreen from './screens/explore/Finance/CryptoMainScreens/CryptoEditScreens/CryptoEditScreen';
import IDCardsMain from './screens/explore/Identity/IDCardsScreen/IDCardsMain/IDCardsMain';
import IDCardsEditScreen from './screens/explore/Identity/IDCardsScreen/IDCardsEditScreen/IDCardsEditScreen';
import TaxMainScreen from './screens/explore/Identity/TaxScreens/TaxMainScreens/TaxMainScreen';
import TaxEditScreen from './screens/explore/Identity/TaxScreens/TaxEditScreens/TaxEditScreen';
import PassportMainScreen from './screens/explore/Identity/PassportScreens/PassportMainScreens/PassportMainScreen';
import PassportEditScreen from './screens/explore/Identity/PassportScreens/PassportEditScreens/PassportEditScreen';
import DrivingLicenseMain from './screens/explore/Identity/DrivingLicense/DrivingLicenseMain/DrivingLicenseMain';
import DrivingLicenseEdit from './screens/explore/Identity/DrivingLicense/DrivingLicenseEdit/DrivingLicenseEdit';
import TourVisaMain from './screens/explore/Identity/TourVisa/TourVisaMain/TourVisaMain';
import TourVisaEdit from './screens/explore/Identity/TourVisa/TourVisaEdit/TourVisaEdit';
import MembershipMain from './screens/explore/Identity/Membership/MembershipMain/MembershipMain';
import MembershipEdit from './screens/explore/Identity/Membership/MembershipEdit/MembershipEdit';
import AudioMain from './screens/explore/Files/Audio/AudioMainScreen/AudioMain';
import AudioView from './screens/explore/Files/Audio/AudioView/AudioView';
import ImagesMain from './screens/explore/Files/Images/ImagesMain/ImagesMain';
import ImagesView from './screens/explore/Files/Images/ImagesView/ImagesView';
import DocumentMain from './screens/explore/Files/Documents/DocumentsMain/DocumentMain';
import DocumentView from './screens/explore/Files/Documents/DocumentsView/DocumentsView';
import NotesMain from './screens/explore/Notes/NotesMain/NotesMain';
import NotesEdit from './screens/explore/Notes/NotesEdit/NotesEdit';
import BookMarksMain from './screens/explore/BookMarks/BookMarksMain/BookMarksMain';
import BookMarksEdit from './screens/explore/BookMarks/BookMarksEdit/BookMarksEdit';
import ContactMain from './screens/explore/Contacts/ContactsMain/ContactMain';
import ContactsEdit from './screens/explore/Contacts/ContactsEdit/ContactsEdit';
import MedicalMain from './screens/explore/Records/Medical/MedicalMain/MedicalMain';
import MedicalEdit from './screens/explore/Records/Medical/MedicalEdit/MedicalEdit';
import InsuranceMain from './screens/explore/Records/Insurance/InsuraceMain/InsuranceMain';
import InsuranceEdit from './screens/explore/Records/Insurance/InsuranceEdit/InsuranceEdit';
import CertificateMain from './screens/explore/Records/Certificate/CertificateMain/CertificateMain';
import CertificateEdit from './screens/explore/Records/Certificate/CertificateEdit/CertificateEdit';
import PasswordsMain from './screens/explore/Logins/Passwords/PasswordsMain/PasswordsMain';
import PasswordsEdit from './screens/explore/Logins/Passwords/PasswordsEdit/PassWordsEdit';
import GeneratePassword from './screens/explore/Logins/Passwords/GeneratePasswords/GeneratePassword';
import WifiRoutersMain from './screens/explore/Logins/WifiRouters/WifiRoutersMain/WifiRoutersMain';
import SyncScreen from './screens/sync/Sync';
import WifiRoutersEdit from './screens/explore/Logins/WifiRouters/WifiRoutersEdit/WifiRoutersEdit';
import FAMain from './screens/explore/Logins/FA/FAMain/FAMain';
import FAEdit from './screens/explore/Logins/FA/FAEdit/FAEdit';
import ChangePasswordScreen from './screens/profile/ChangePassword/ChangePasswordScreen';
import AddPIN from './screens/profile/AddPIN/AddPIN';
import Language from './screens/profile/Language/Language';
import Face from './screens/profile/Face/Face';

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
        <Stack.Screen name="Identity" component={Identity} />
        <Stack.Screen
          name="Identity Details"
          component={IdentityDetailsScreen}
        />
        <Stack.Screen name="Tax" component={Tax} />
        <Stack.Screen name="DL" component={DL} />
        <Stack.Screen name="Passport" component={Passport} />
        <Stack.Screen name="Tour" component={Tour} />
        <Stack.Screen name="Membership" component={Membership} />
        <Stack.Screen name="Records" component={RecordsMain} />
        <Stack.Screen name="Medical Reports" component={MedicalReports} />
        <Stack.Screen name="Insurance" component={Insurance} />
        <Stack.Screen name="Certificate" component={Certificate} />
        <Stack.Screen name="Invoice" component={Invoice} />
        <Stack.Screen name="Files" component={Files} />
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
        <Stack.Screen name="Finance" component={FinanceMain} />
        <Stack.Screen name="Logins" component={LoginsMain} />
        <Stack.Screen name="BankAccounts" component={BankAccount} />
        <Stack.Screen name="Lender" component={Lender} />
        <Stack.Screen name="CryptoWallet" component={CryptoWallet} />
        <Stack.Screen name="Sync" component={SyncScreen} />
        <Stack.Screen name="BankAccountMain" component={BankAccountMain} />
        <Stack.Screen name="BankAccountEdit" component={BankAccountEdit} />
        <Stack.Screen name="CardsMainScreen" component={CardsMainScreen} />
        <Stack.Screen name="CardsEditScreen" component={CardsEditScreen} />
        <Stack.Screen name="CryptoMainScreen" component={CryptoMainScreen} />
        <Stack.Screen name="CryptoEditScreen" component={CryptoEditScreen} />
        <Stack.Screen name="IDCardsMain" component={IDCardsMain} />
        <Stack.Screen name="IDCardsEdit" component={IDCardsEditScreen} />
        <Stack.Screen name="TaxMainScreen" component={TaxMainScreen} />
        <Stack.Screen name="TaxEditScreen" component={TaxEditScreen} />
        <Stack.Screen
          name="PassportMainScreen"
          component={PassportMainScreen}
        />
        <Stack.Screen
          name="PassportEditScreen"
          component={PassportEditScreen}
        />
        <Stack.Screen
          name="DrivingLicenseMain"
          component={DrivingLicenseMain}
        />
        <Stack.Screen
          name="DrivingLicenseEdit"
          component={DrivingLicenseEdit}
        />
        <Stack.Screen name="TourVisaMain" component={TourVisaMain} />
        <Stack.Screen name="TourVisaEdit" component={TourVisaEdit} />
        <Stack.Screen name="MembershipMain" component={MembershipMain} />
        <Stack.Screen name="MembershipEdit" component={MembershipEdit} />
        <Stack.Screen name="AudioMain" component={AudioMain} />
        <Stack.Screen name="AudioView" component={AudioView} />
        <Stack.Screen name="ImagesMain" component={ImagesMain} />
        <Stack.Screen name="ImagesView" component={ImagesView} />
        <Stack.Screen name="DocumentMain" component={DocumentMain} />
        <Stack.Screen name="DocumentView" component={DocumentView} />
        <Stack.Screen name="NotesMain" component={NotesMain} />
        <Stack.Screen name="NotesEdit" component={NotesEdit} />
        <Stack.Screen name="BookMarksMain" component={BookMarksMain} />
        <Stack.Screen name="BookMarksEdit" component={BookMarksEdit} />
        <Stack.Screen name="ContactMain" component={ContactMain} />
        <Stack.Screen name="ContactEdit" component={ContactsEdit} />
        <Stack.Screen name="MedicalMain" component={MedicalMain} />
        <Stack.Screen name="MedicalEdit" component={MedicalEdit} />
        <Stack.Screen name="InsuranceMain" component={InsuranceMain} />
        <Stack.Screen name="InsuranceEdit" component={InsuranceEdit} />
        <Stack.Screen name="CertificateMain" component={CertificateMain} />
        <Stack.Screen name="CertificateEdit" component={CertificateEdit} />
        <Stack.Screen name="PasswordsMain" component={PasswordsMain} />
        <Stack.Screen name="PasswordsEdit" component={PasswordsEdit} />
        <Stack.Screen name="GeneratePassword" component={GeneratePassword} />
        <Stack.Screen name="WifiRoutersMain" component={WifiRoutersMain} />
        <Stack.Screen name="WifiRoutersEdit" component={WifiRoutersEdit} />
        <Stack.Screen name="FAMain" component={FAMain} />
        <Stack.Screen name="FAEdit" component={FAEdit} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
        <Stack.Screen name="AddPIN" component={AddPIN} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Face" component={Face} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
