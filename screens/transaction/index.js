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

const TransactionScreen = ({ route, navigation }) => {
  const { recipient } = route.params;
  const [memo, setMemo] = useState('');
  const [account, setAccount] = useState(''); // Placeholder for account selection
  const [repeat, setRepeat] = useState(false);

  // Placeholder accounts data
  const accounts = [
    { id: '1', name: 'Savings Account', digits: '1234', balance: '$5,000' },
    { id: '2', name: 'Checking Account', digits: '5678', balance: '$2,500' },
    // Add more accounts as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
            keyboardType="numeric"
            placeholder="$0.00"
            // Implementation of currency input handler is omitted for simplicity
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
      <TouchableOpacity style={styles.reviewButton}>
        <Text style={styles.reviewButtonText}>Review & send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 10,
    },
    headerTitle: {
      fontSize: 18,
    },
    scrollContainer: {
      paddingHorizontal: 20,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      borderColor: '#ddd',
      borderWidth: 1,
      padding: 20,
      marginTop: 10,
    },
    recipientDetail: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    initialCircle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#f0f0f0',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15,
    },
    initial: {
      fontSize: 24,
      color: '#000',
    },
    recipientInfo: {
      flex: 1,
    },
    recipientName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    registeredAs: {
      fontSize: 16,
      color: '#666',
    },
    recipientContact: {
      fontSize: 16,
      color: '#666',
    },
    currencyInput: {
      fontSize: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
      marginBottom: 20,
      keyboardType: 'numeric',
    },
    memoSection: {
      marginBottom: 20,
    },
    memoLabel: {
      fontSize: 16,
      marginBottom: 5,
    },
    memoInput: {
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 5,
    },
    characterCount: {
      fontSize: 12,
      color: '#999',
      textAlign: 'right',
    },
    accountPicker: {
      marginBottom: 20,
    },
    pickerLabel: {
      fontSize: 16,
      marginBottom: 5,
    },
    datePicker: {
      marginBottom: 20,
    },
    dateLabel: {
      fontSize: 16,
      marginBottom: 5,
    },
    repeatSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    repeatLabel: {
      fontSize: 16,
    },
    reviewButton: {
      backgroundColor: '#007bff',
      padding: 15,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    reviewButtonText: {
      color: '#ffffff',
      fontSize: 18,
    },
  });
  
  export default TransactionScreen;