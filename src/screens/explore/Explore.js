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
import {useState} from 'react';

const {width} = Dimensions.get('window');

const Explore = () => {
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
          style={{alignSelf: 'center', width: width, marginBottom: 50}}>
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
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <AudioIcon />
              </View>
              <Text style={styles.text}>Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <ImagesIcon />
              </View>
              <Text style={styles.text}>Images</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <DocumentIcon />
              </View>
              <Text style={styles.text}>Documents</Text>
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
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <AudioIcon />
              </View>
              <Text style={styles.text}>Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <ImagesIcon />
              </View>
              <Text style={styles.text}>Images</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <DocumentIcon />
              </View>
              <Text style={styles.text}>Documents</Text>
            </TouchableOpacity>
          </Animated.View>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <FinanceIcon />
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
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <AudioIcon />
              </View>
              <Text style={styles.text}>Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <ImagesIcon />
              </View>
              <Text style={styles.text}>Images</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <DocumentIcon />
              </View>
              <Text style={styles.text}>Documents</Text>
            </TouchableOpacity>
          </Animated.View>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <NotesIcon />
              </View>
              <Text style={styles.contentText}>Notes</Text>
            </View>
            {modal3 === false ? (
              <TouchableOpacity activeOpacity={0.8} onPress={modalHandler3}>
                <ArrowDownIcon1 />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={modalCloseHandler3}>
                <ArrowRightIcon />
              </TouchableOpacity>
            )}
          </View>
          <Animated.View
            style={[
              styles.modal,
              {height: value3, display: modal3 ? 'flex' : 'none'},
            ]}>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <AudioIcon />
              </View>
              <Text style={styles.text}>Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <ImagesIcon />
              </View>
              <Text style={styles.text}>Images</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <DocumentIcon />
              </View>
              <Text style={styles.text}>Documents</Text>
            </TouchableOpacity>
          </Animated.View>
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
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <AudioIcon />
              </View>
              <Text style={styles.text}>Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <ImagesIcon />
              </View>
              <Text style={styles.text}>Images</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
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
            <ArrowDownIcon1 />
          </View>
          <Animated.View
            style={[
              styles.modal,
              {height: value3, display: modal3 ? 'flex' : 'none'},
            ]}>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <AudioIcon />
              </View>
              <Text style={styles.text}>Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <ImagesIcon />
              </View>
              <Text style={styles.text}>Images</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.modalContent}>
              <View style={styles.logo}>
                <DocumentIcon />
              </View>
              <Text style={styles.text}>Documents</Text>
            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity activeOpacity={0.8} style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <BookMarksIcon />
              </View>
              <Text style={styles.contentText}>BookMarks</Text>
            </View>
            <ArrowDownIcon1 />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.container}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <RecordsIcon />
              </View>
              <Text style={styles.contentText}>Records</Text>
            </View>
            <ArrowDownIcon1 />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Explore;
