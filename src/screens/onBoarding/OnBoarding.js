import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './styles';
import ArrowForwardIcon from '../../assets/ForwardArrowIcon.svg';
import ArrowBackwardIcon from '../../assets/BackArrowIcon.svg';
import {useState} from 'react';
import {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

export const data = {
  images: [
    {
      id: 0,
      heading: 'Most trusted & secure vault',
      text: 'Your vault is protected with world’s most secure technology and literally no body has access to your vault apart from you.',
      imageUri: require('../../assets/OnboardingImage2.png'),
    },
    {
      id: 1,
      heading: 'Most trusted & secure vault',
      text: 'Your vault is protected with world’s most secure technology and literally no body has access to your vault apart from you.',
      imageUri: require('../../assets/OnboardingImage2.png'),
    },
    {
      id: 2,
      heading: 'Most trusted & secure vault',
      text: 'Your vault is protected with world’s most secure technology and literally no body has access to your vault apart from you.',
      imageUri: require('../../assets/OnboardingImage2.png'),
    },
  ],
};

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();
  const navigation = useNavigation();

  const scrollHandler = () => {
    if (currentIndex !== 2) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('Signup');
    }
  };

  const backHandler = () => {
    if (currentIndex !== 0) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: currentIndex - 1,
      });
    }
  };

  const onScroll = event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.ceil(index);
    console.log('roundIndex', roundIndex);
    setCurrentIndex(roundIndex);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.view1} key={index}>
      <Image source={item?.imageUri} style={styles.image} />
      <View style={styles.view2}>
        <Text style={styles.heading}>{item?.heading}</Text>
        <Text style={styles.text}>{item?.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      {currentIndex !== 0 ? (
        <TouchableOpacity
          onPress={backHandler}
          activeOpacity={0.8}
          style={styles.view}>
          <ArrowBackwardIcon />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={0.8} style={styles.view} />
      )}
      <FlatList
        ref={flatListRef}
        horizontal={true}
        data={data?.images}
        pagingEnabled
        bounces={false}
        decelerationRate={0}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item?.id}
        renderItem={renderItem}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        onScroll={onScroll}
      />
      <View style={styles.bottom}>
        {data.images.map((item, index) => (
          <View key={index} style={styles.dotView}>
            <View
              style={currentIndex === index ? styles.activeDot : styles.dot}
            />
          </View>
        ))}
        <TouchableOpacity
          onPress={scrollHandler}
          activeOpacity={0.8}
          style={styles.button}>
          <ArrowForwardIcon height={'20'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
