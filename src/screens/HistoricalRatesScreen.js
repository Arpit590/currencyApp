// HistoricalRatesScreen.js
import React, { useState } from 'react';
import { View, Text, Button, DatePickerAndroid } from 'react-native';

const HistoricalRatesScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const openDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: selectedDate,
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        const selected = new Date(year, month, day);
        setSelectedDate(selected);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  return (
    <View>
      <Text>Select Date: {selectedDate.toDateString()}</Text>
      <Button title="Pick a Date" onPress={openDatePicker} />
      {/* Fetch historical exchange rates for selectedDate */}
    </View>
  );
};

export default HistoricalRatesScreen;
