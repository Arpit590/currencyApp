import {
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfileScreen = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const getUserProfileHandler = async () => {
    let profile = await AsyncStorage.getItem('userProfile');
    setUser(JSON.parse(profile));
    console.log('Usering', user);
  };

  useEffect(() => {
    getUserProfileHandler();
  }, []);

  const signOutHandler = async () => {
    setLoading(true);
    try {
      await auth()
        .signOut()
        .then(async res => {
          console.log('Response Success', JSON.stringify(res));
          ToastAndroid.show(
            'Account signed out successfully!',
            ToastAndroid.SHORT,
          );
          navigation.navigate('Login');
          setLoading(false);
          await AsyncStorage.clear()
        })
        .catch(err => {
          console.log('Error', err);
          setLoading(false);
        });
    } catch (error) {
      console.log('Error', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>User Profile</Text>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image source={require('../assets/user.png')} style={styles.user} />
        <Text style={styles.text}>Name: {user?.displayName}</Text>
        <Text style={styles.text}>Email : {user?.email}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={signOutHandler}
        style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 15,
    color: 'black',
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: '2%',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
  user: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
});
