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
  SafeAreaView,
} from 'react-native';
import {FontSizes, ThemeColors} from '../../theme/globalStyles';
import styles from './styles';
import SearchIcon from '../../assets/Search.svg';
import ArrowDownIcon from '../../assets/ArrowDown.svg';
import ArrowDownIcon1 from '../../assets/ArrowDown2.svg';
import GlobeIcon from '../../assets/Globe.svg';
import LockIcon from '../../assets/Lock.svg';
import PasswordIcon from '../../assets/Password.svg';
import InfoIcon from '../../assets/Info.svg';
import ShareIcon from '../../assets/Share.svg';
import ForwardIcon from '../../assets/Forward.svg';
import ArrowUpIcon from '../../assets/ArrowUp.svg';
import {useState} from 'react';

const {width} = Dimensions.get('window');

export const listData = [
  {
    id: 0,
    heading: 'Netflix',
    filter: 'Login',
    desc: 'netflix.com',
    imgUri: require('../../assets/Image1.png'),
    website: 'www.netflix.com',
  },
  {
    id: 1,
    heading: 'IDFC Credit Card',
    filter: 'Payment',
    desc: '4484 **** **** ****',
    imgUri: require('../../assets/Image2.png'),
    website: 'www.credit.com',
  },
  {
    id: 2,
    heading: 'Amazon',
    filter: 'Logins',
    desc: 'amazon.com',
    imgUri: require('../../assets/Image3.png'),
    website: 'www.amazon.com',
  },
  {
    id: 3,
    heading: 'List of Candidates of companhy',
    filter: 'Files',
    desc: 'It is unkonwn to all of the superfiles if called not',
    imgUri: require('../../assets/Image4.png'),
    website: 'www.candidates.com',
  },
  {
    id: 4,
    heading: 'UI design',
    filter: 'Bookmark',
    desc: 'Google Chrome',
    imgUri: require('../../assets/Image5.png'),
    website: 'www.google.com',
  },
  {
    id: 5,
    heading: 'Indian Bank',
    filter: 'Payment',
    desc: 'indianbank.in',
    imgUri: require('../../assets/Image6.png'),
    website: 'www.indian.com',
  },
  {
    id: 6,
    heading: 'Amazon',
    filter: 'Logins',
    desc: 'amazon.com',
    imgUri: require('../../assets/Image3.png'),
    website: 'www.amazon.com',
  },
  {
    id: 7,
    heading: 'List of Candidates of companhy',
    filter: 'Files',
    desc: 'It is unkonwn to all of the superfiles if called not',
    imgUri: require('../../assets/Image4.png'),
    website: 'www.candidates.com',
  },
  {
    id: 8,
    heading: 'UI design',
    filter: 'Bookmark',
    desc: 'Google Chrome',
    imgUri: require('../../assets/Image5.png'),
    website: 'www.google.com',
  },
  {
    id: 9,
    heading: 'UI design',
    filter: 'Bookmark',
    desc: 'Google Chrome',
    imgUri: require('../../assets/Image5.png'),
    website: 'www.google.com',
  },
];

const HomeScreen = () => {
  const value = useState(new Animated.Value(0))[0];
  const [modal, setModal] = useState(false);
  const [handlerKey, setHandlerKey] = useState(null);

  const modalHandler = item => {
    setModal(true);
    setHandlerKey(item?.id);
    Animated.timing(value, {
      toValue: 180,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  const modalHandler1 = item => {
    setModal(false);
    setHandlerKey(null);
    Animated.timing(value, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.screen}>
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
        <View style={styles.view1}>
          <Text style={styles.headingText}>Recent Activities</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.view2}>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Login</Text>
              <ArrowDownIcon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Identity</Text>
              <ArrowDownIcon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Finance</Text>
              <ArrowDownIcon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Login</Text>
              <ArrowDownIcon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Login</Text>
              <ArrowDownIcon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.option}>
              <Text style={styles.optionText}>Login</Text>
              <ArrowDownIcon />
            </TouchableOpacity>
          </ScrollView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{alignSelf: 'center', width: width, marginBottom: 300}}>
            <FlatList
              data={listData}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <>
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        modal === false
                          ? modalHandler(item)
                          : modalHandler1(item);
                      }}
                      key={item.id}
                      style={{
                        ...styles.box,
                        marginHorizontal: index === handlerKey ? 30 : 0,
                        borderWidth: index === handlerKey ? 1 : 0,
                        borderColor: index === handlerKey ? '#DBD9D1' : '#DBD9D1',
                        paddingHorizontal: index === handlerKey ? 5 : 35,
                        borderTopEndRadius: 12,
                        borderTopStartRadius: 12,
                      }}>
                      <View style={styles.boxContainer}>
                        <Image source={item.imgUri} style={styles.boxImage} />
                        <View style={styles.boxTextContainer}>
                          <View style={{}}>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <Text style={styles.boxText} numberOfLines={1}>
                                {item.heading}
                              </Text>
                              <View style={styles.view3}>
                                <Text style={styles.boxText2}>
                                  {item.filter}
                                </Text>
                              </View>
                            </View>
                            <Text style={styles.boxText1} numberOfLines={1}>
                              {item.desc}
                            </Text>
                          </View>
                        </View>
                      </View>
                      {index !== handlerKey ? (
                        <ArrowDownIcon1 />
                      ) : (
                        <ArrowUpIcon />
                      )}
                    </TouchableOpacity>
                    {index === handlerKey ? (
                      <Animated.View
                        style={[
                          styles.view4,
                          {
                            height: value,
                            display: modal === false ? 'none' : 'flex',
                          },
                        ]}>
                        {modal && (
                          <>
                            <View style={styles.view5}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <GlobeIcon />
                                <Text
                                  style={[
                                    styles.boxText2,
                                    {fontSize: FontSizes.large, marginLeft: 20},
                                  ]}>
                                  {item?.website}
                                </Text>
                              </View>
                              <ForwardIcon />
                            </View>
                            <View style={[styles.view5, {marginBottom: 10}]}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <LockIcon />
                                <Text
                                  style={[
                                    styles.boxText2,
                                    {fontSize: FontSizes.large, marginLeft: 20},
                                  ]}>
                                  ********************
                                </Text>
                              </View>
                              <PasswordIcon />
                            </View>
                            <View style={styles.view6}>
                              <View style={styles.view7}>
                                <InfoIcon />
                                <Text style={styles.infoText}>See Details</Text>
                              </View>
                              <View style={styles.view7}>
                                <ShareIcon />
                                <Text style={styles.infoText}>Share</Text>
                              </View>
                            </View>
                          </>
                        )}
                      </Animated.View>
                    ) : null}
                  </View>
                </>
              )}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
