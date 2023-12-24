import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const signupHandler = async () => {
    setLoading(true);
    try {
      const {user} = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      console.log('User created successfully:', user);

      // Update user profile
      const profile = {
        displayName: name,
      };

      console.log('JSON', JSON.stringify(user), name, JSON.stringify(profile));

      await user.updateProfile(profile);

      const updatedUser = await auth().currentUser;

      console.log('User profile updated successfully:', updatedUser);

      await AsyncStorage.setItem('userProfile', JSON.stringify(updatedUser));

      ToastAndroid.show('Account created successfully!', ToastAndroid.SHORT);
      navigation.navigate('Home');
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
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setName(text)}
            value={name}
            keyboardType="default"
          />
        </View>
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
          onPress={signupHandler}
          style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            alignSelf: 'center',
          }}>
          <Text style={styles.text}>Already have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signup}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegistrationScreen;

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
