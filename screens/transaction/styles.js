import {
    StyleSheet,
  } from 'react-native';

export default StyleSheet.create({
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