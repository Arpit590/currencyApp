// Implementation of dynamic UI updates
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [user, setUser] = useState(null);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const navigation = useNavigation();

  const handleConvert = () => {
    if (!amount) {
      // Handle empty amount input
      return;
    }

    // You should replace these conversion rates with real values or fetch them from an API
    const conversionRates = {
      USD: {EUR: 0.85, INR: 74.5}, // Example conversion rates, replace with real values
      EUR: {USD: 1.18, INR: 88.4},
      INR: {USD: 0.013, EUR: 0.011},
      // Add more conversion rates as needed
    };

    const conversionRate = conversionRates[fromCurrency][toCurrency];
    const converted = parseFloat(amount) * conversionRate;

    setConvertedAmount(converted.toFixed(2)); // Round to 2 decimal places

    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <Text style={styles.header}>Currency Converter App</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('User')}>
            <Image source={require('../assets/user.png')} style={styles.user} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.view}>
        <Text style={styles.label}>From Currency:</Text>
        <Picker
          style={{backgroundColor: 'black', marginBottom: 20}}
          selectedValue={fromCurrency}
          onValueChange={value => setFromCurrency(value)}>
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="INR" value="INR" />
          {/* Add more currency options as needed */}
        </Picker>

        <Text style={styles.label}>To Currency:</Text>
        <Picker
          style={{backgroundColor: 'black', marginBottom: 20}}
          selectedValue={toCurrency}
          onValueChange={value => setToCurrency(value)}>
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="INR" value="INR" />
          {/* Add more currency options as needed */}
        </Picker>

        <Text style={styles.label}>Enter Amount:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={text => setAmount(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.convertButton}
          activeOpacity={0.8}
          onPress={handleConvert}>
          <Text style={styles.convertButtonText}>Convert</Text>
        </TouchableOpacity>

        {convertedAmount !== null && (
          <View style={styles.list}>
            <Text style={styles.listText}>Result</Text>
            <Text style={styles.result}>
              Converted Amount: {convertedAmount} {toCurrency}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  subcontainer: {
    padding: 20,
  },
  header: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '800',
  },
  user: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  view: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 14,
    color: 'black',
  },
  dropdown: {
    color: 'black',
    fontSize: 14,
  },
  convertButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: '70%',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 50,
  },
  convertButtonText: {
    fontSize: 15,
    color: 'white',
  },
  listText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 15,
    color: 'black',
  },
});
