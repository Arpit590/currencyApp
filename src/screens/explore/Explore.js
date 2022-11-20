import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Animated,
  Modal,
} from 'react-native';
import {FontSizes, ThemeColors} from '../../theme/globalStyles';
import styles from './styles';
import SearchIcon from '../../assets/Search.svg';
import ArrowDownIcon from '../../assets/ArrowDown.svg';
import ArrowDownIcon1 from '../../assets/ArrowDown2.svg';
import ContactsIcon from '../../assets/Contacts1.svg';
import FilesIcon from '../../assets/Files1.svg';
import IdentityIcon from '../../assets/Identity1.svg';
import LoginsIcon from '../../assets/Logins1.svg';
import RecordsIcon from '../../assets/Records1.svg';
import BookMarksIcon from '../../assets/BookMarks1.svg';
import FinanceIcon from '../../assets/Finance1.svg';
import NotesIcon from '../../assets/Notes1.svg';
import ImagesIcon from '../../assets/Images.svg';
import DocumentIcon from '../../assets/Documents.svg';
import AudioIcon from '../../assets/Audio.svg';
import ArrowRightIcon from '../../assets/ArrowRight.svg';
import WRIcon from '../../assets/WR.svg';
import FAIcon from '../../assets/2FA.svg';
import PasswordsIcon from '../../assets/Passwords.svg';
import TaxIcon from '../../assets/Tax.svg';
import DLIcon from '../../assets/DL.svg';
import PassportIcon from '../../assets/Passport.svg';
import MemberIcon from '../../assets/Member.svg';
import TourIcon from '../../assets/Tour.svg';
import InsuranceIcon from '../../assets/Insurance.svg';
import InvoiceIcon from '../../assets/Invoice.svg';
import CertificateIcon from '../../assets/Certificate.svg';
import MedicalIcon from '../../assets/Medical.svg';
import BAIcon from '../../assets/BA.svg';
import CryptoIcon from '../../assets/Crypto.svg';
import CardsIcon from '../../assets/Cards.svg';
import LedgerIcon from '../../assets/Ledger.svg';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Explore = () => {
  const navigation = useNavigation();
  const value = useState(new Animated.Value(0))[0];
  const value1 = useState(new Animated.Value(0))[0];
  const value2 = useState(new Animated.Value(0))[0];
  const value3 = useState(new Animated.Value(0))[0];
  const value4 = useState(new Animated.Value(0))[0];
  const value5 = useState(new Animated.Value(0))[0];
  const value6 = useState(new Animated.Value(0))[0];
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);

  const modalHandler = () => {
    setModal(true);
    Animated.timing(value, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const modalHandler1 = () => {
    setModal1(true);
    Animated.timing(value1, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const modalHandler2 = () => {
    setModal2(true);
    Animated.timing(value2, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const modalHandler3 = () => {
    setModal3(true);
    Animated.timing(value3, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const modalHandler4 = () => {
    setModal4(true);
    Animated.timing(value4, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const modalHandler5 = () => {
    setModal5(true);
    Animated.timing(value5, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const modalHandler6 = () => {
    setModal6(true);
    Animated.timing(value6, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const modalCloseHandler = () => {
    setModal(false);
    Animated.timing(value, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };
  const modalCloseHandler1 = () => {
    setModal1(false);
    Animated.timing(value1, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };
  const modalCloseHandler2 = () => {
    setModal2(false);
    Animated.timing(value2, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  const modalCloseHandler3 = () => {
    setModal3(false);
    Animated.timing(value3, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  const modalCloseHandler4 = () => {
    setModal4(false);
    Animated.timing(value4, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  const modalCloseHandler5 = () => {
    setModal5(false);
    Animated.timing(value5, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  const modalCloseHandler6 = () => {
    setModal6(false);
    Animated.timing(value6, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <View style={styles.search}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={ThemeColors.textSecondary}
            keyboardType="default"
            style={styles.searchInput}
          />
          <SearchIcon />
        </View>
      </View>
      <View style={styles.view1}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{alignSelf: 'center', width: width, marginBottom: 100}}>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <LoginsIcon />
              </View>
              <Text style={styles.contentText}>Login</Text>
            </View>
            {modal === false ? (
              <TouchableOpacity activeOpacity={0.8} onPress={modalHandler}>
                <ArrowDownIcon1 />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.8} onPress={modalCloseHandler}>
                <ArrowRightIcon />
              </TouchableOpacity>
            )}
          </View>
          <Animated.View
            style={[
              styles.modal,
              {height: value, display: modal ? 'flex' : 'none'},
            ]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PasswordsMain')}
              activeOpacity={0.8}
              style={styles.modalContent}>
              <View style={styles.logo}>
                <PasswordsIcon />
              </View>
              <Text style={styles.text}>Passwords</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <FAIcon />
              </View>
              <Text style={styles.text}>2 FAs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('WifiRoutersMain')}
              activeOpacity={0.8}
              style={styles.modalContent}>
              <View style={styles.logo}>
                <WRIcon />
              </View>
              <Text style={styles.text}>Wifi Router</Text>
            </TouchableOpacity>
          </Animated.View>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <IdentityIcon />
              </View>
              <Text style={styles.contentText}>Identity</Text>
            </View>
            {modal1 === false ? (
              <TouchableOpacity activeOpacity={0.8} onPress={modalHandler1}>
                <ArrowDownIcon1 />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={modalCloseHandler1}>
                <ArrowRightIcon />
              </TouchableOpacity>
            )}
          </View>
          <Animated.View
            style={[
              styles.modal,
              {height: value1, display: modal1 ? 'flex' : 'none'},
            ]}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              <TouchableOpacity
                onPress={() => navigation.navigate('IDCardsMain')}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <IdentityIcon />
                </View>
                <Text style={styles.text}>ID Cards</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaxMainScreen')}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <TaxIcon />
                </View>
                <Text style={styles.text}>Tax</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('PassportMainScreen')}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <PassportIcon />
                </View>
                <Text style={styles.text}>Passports</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('DrivingLicenseMain')}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <DLIcon />
                </View>
                <Text style={styles.text}>Driving License</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('TourVisaMain')}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <TourIcon />
                </View>
                <Text style={styles.text}>Tour Visa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('MembershipMain')}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <MemberIcon />
                </View>
                <Text style={styles.text}>Membership</Text>
              </TouchableOpacity>
            </ScrollView>
          </Animated.View>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <DLIcon />
              </View>
              <Text style={styles.contentText}>Finance</Text>
            </View>
            {modal2 === false ? (
              <TouchableOpacity activeOpacity={0.8} onPress={modalHandler2}>
                <ArrowDownIcon1 />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={modalCloseHandler2}>
                <ArrowRightIcon />
              </TouchableOpacity>
            )}
          </View>
          <Animated.View
            style={[
              styles.modal,
              {height: value2, display: modal2 ? 'flex' : 'none'},
            ]}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              <TouchableOpacity
                onPress={() => navigation.navigate('BankAccountMain')}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <BAIcon />
                </View>
                <Text style={styles.text}>Bank Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('CardsMainScreen')}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <CardsIcon />
                </View>
                <Text style={styles.text}>Cards</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('CryptoMainScreen')}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <CryptoIcon />
                </View>
                <Text style={styles.text}>Crypto Wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
                <View style={styles.logo}>
                  <LedgerIcon />
                </View>
                <Text style={styles.text}>Lender</Text>
              </TouchableOpacity>
            </ScrollView>
          </Animated.View>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <NotesIcon />
              </View>
              <Text style={styles.contentText}>Notes</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('NotesMain');
              }}>
              <ArrowRightIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <FilesIcon />
              </View>
              <Text style={styles.contentText}>Files</Text>
            </View>
            {modal4 === false ? (
              <TouchableOpacity activeOpacity={0.8} onPress={modalHandler4}>
                <ArrowDownIcon1 />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={modalCloseHandler4}>
                <ArrowRightIcon />
              </TouchableOpacity>
            )}
          </View>
          <Animated.View
            style={[
              styles.modal,
              {height: value4, display: modal4 ? 'flex' : 'none'},
            ]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AudioMain')}
              activeOpacity={0.8}
              style={styles.modalContent}>
              <View style={styles.logo}>
                <AudioIcon />
              </View>
              <Text style={styles.text}>Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ImagesMain')}
              activeOpacity={0.8}
              style={styles.modalContent}>
              <View style={styles.logo}>
                <ImagesIcon />
              </View>
              <Text style={styles.text}>Images</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DocumentMain')}
              activeOpacity={0.8}
              style={styles.modalContent}>
              <View style={styles.logo}>
                <DocumentIcon />
              </View>
              <Text style={styles.text}>Documents</Text>
            </TouchableOpacity>
          </Animated.View>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <ContactsIcon />
              </View>
              <Text style={styles.contentText}>Contacts</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('ContactMain');
              }}>
              <ArrowRightIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <BookMarksIcon />
              </View>
              <Text style={styles.contentText}>BookMarks</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('BookMarksMain');
              }}>
              <ArrowRightIcon />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <RecordsIcon />
              </View>
              <Text style={styles.contentText}>Records</Text>
            </View>
            {modal6 === false ? (
              <TouchableOpacity activeOpacity={0.8} onPress={modalHandler6}>
                <ArrowDownIcon1 />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={modalCloseHandler6}>
                <ArrowRightIcon />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[
              styles.modal,
              {height: value6, display: modal6 ? 'flex' : 'none'},
            ]}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MedicalMain');
                }}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <MedicalIcon />
                </View>
                <Text style={styles.text}>Medical</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('InsuranceMain');
                }}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <InsuranceIcon />
                </View>
                <Text style={styles.text}>Insurance</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CertificateMain', {certificate: true});
                }}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <CertificateIcon />
                </View>
                <Text style={styles.text}>Certificate</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CertificateMain', {certificate: false});
                }}
                activeOpacity={0.8}
                style={styles.modalContent}>
                <View style={styles.logo}>
                  <InvoiceIcon />
                </View>
                <Text style={styles.text}>Invoice</Text>
              </TouchableOpacity>
            </ScrollView>
          </Animated.View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Explore;
