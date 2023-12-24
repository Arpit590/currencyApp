import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  // useEffect to listen for changes in the authentication state
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      setUser(user);
      await AsyncStorage.setItem('userProfile', JSON.stringify(user));
      console.log('User', JSON.stringify(user));
      if (user !== null) {
        navigation.navigate('Home');
      }
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const loginHandler = async () => {
    setLoading(true);
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log('Response Success', JSON.stringify(res));
          ToastAndroid.show(
            'Account logged In successfully!',
            ToastAndroid.SHORT,
          );
          navigation.navigate('Home');
          setLoading(false);
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
      <Text style={styles.heading}>Currency Converter App</Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            onChangeText={text => setPassword(text)}
            value={password}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          width: '100%',
          paddingHorizontal: 30,
          position: 'absolute',
          bottom: '2%',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={loginHandler}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            alignSelf: 'center',
          }}>
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.signup}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingVertical: 30,
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: 'black',
    fontSize: 14,
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
  text: {
    fontSize: 13,
    color: 'gray',
  },
  signup: {
    fontSize: 13,
    color: 'black',
  },
});
