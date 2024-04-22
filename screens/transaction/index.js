import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatCurrency } from './helpers';
import { accounts } from '../home/mocks'; // TODO - move this to a common place, not the home component
import styles from './styles';

const TransactionScreen = ({ route, navigation }) => {
  const { recipient } = route.params;
  const [memo, setMemo] = useState('');
  const [currencyDigits, setCurrencyDigits] = useState('0.00');
  const [account, setAccount] = useState(''); // Placeholder for account selection
  const [repeat, setRepeat] = useState(false);

  const currency = formatCurrency(currencyDigits)

  // // Placeholder accounts data
  // const accounts = [
  //   { id: '1', name: 'Savings Account', digits: '1234', balance: '$5,000' },
  //   { id: '2', name: 'Checking Account', digits: '5678', balance: '$2,500' },
  //   // Add more accounts as needed
  // ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>&nbsp;</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transaction</Text>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.recipientDetail}>
            <View style={styles.initialCircle}>
              <Text style={styles.initial}>{recipient.name[0]}</Text>
            </View>
            <View style={styles.recipientInfo}>
              <Text style={styles.recipientName}>{recipient.name}</Text>
              <Text style={styles.registeredAs}>Registered as {recipient.name.split(' ')[0].toUpperCase()}</Text>
              <Text style={styles.recipientContact}>{recipient.detail}</Text>
            </View>
          </View>
          <TextInput
            style={styles.currencyInput}
            inputMode='decimal'
            // keyboardType="numeric"
            placeholder="0.00"
            value={currency}
            onChangeText={setCurrencyDigits}
          />
          <View style={styles.memoSection}>
            <Text style={styles.memoLabel}>Message to recipient (optional)</Text>
            <TextInput
              style={styles.memoInput}
              value={memo}
              onChangeText={setMemo}
              maxLength={140}
            />
            <Text style={styles.characterCount}>{140 - memo.length} characters left</Text>
          </View>
          <View style={styles.accountPicker}>
            <Text style={styles.pickerLabel}>Pay from</Text>
            <Picker
              selectedValue={account}
              onValueChange={(itemValue, itemIndex) => setAccount(itemValue)}
            >
              {accounts.map(acc => (
                <Picker.Item key={acc.id} label={`${acc.name} (...${acc.digits}) - ${acc.balance}`} value={acc.id} />
              ))}
            </Picker>
          </View>
          <View style={styles.datePicker}>
            <Text style={styles.dateLabel}>Send on</Text>
            <Text>Today</Text>
          </View>
          <View style={styles.repeatSection}>
            <Text style={styles.repeatLabel}>Repeat payment</Text>
            <Switch
              value={repeat}
              onValueChange={() => setRepeat(previousState => !previousState)}
              disabled={true} // Example of a disabled switch
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.reviewButton} onPress={() => {
        navigation.navigate('Loading', {
          recipient,
          amount: currency,
        });
        
      }}>
        <Text style={styles.reviewButtonText}>Review & send</Text>
      </TouchableOpacity>
    </View>
  );
};
  
  export default TransactionScreen;