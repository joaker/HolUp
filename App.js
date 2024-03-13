import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const quickActions = [
    { id: '1', title: 'Send Money' },
    { id: '2', title: 'Deposit Money' },
    { id: '3', title: 'Review Activity' },
  ];

  const accounts = [
    { id: '1', name: 'Savings Account', balance: '$5,000', digits: '1234' },
    { id: '2', name: 'Checking Account', balance: '$2,500', digits: '5678' },
    // Add more accounts as needed
  ];

  const renderQuickAction = ({ item }) => (
    <TouchableOpacity style={styles.actionButton}>
      <Text style={styles.actionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderAccount = ({ item }) => (
    <View style={styles.accountContainer}>
      <Text style={styles.accountText}>{`${item.name} (${item.digits})`}</Text>
      <Text style={styles.balanceText}>{item.balance}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="chat" size={30} color="#000" />
        <Icon name="home-outline" size={30} color="#000" />
        <Icon name="account-circle" size={30} color="#000" />
      </View>

      <FlatList
        data={quickActions}
        renderItem={renderQuickAction}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.actionsContainer}
      />

      <Text style={styles.sectionTitle}>Accounts</Text>
      <FlatList
        data={accounts}
        renderItem={renderAccount}
        keyExtractor={item => item.id}
      />

      <View style={styles.footer}>
        <Icon name="account" size={30} color="blue" />
        <Icon name="bank-transfer" size={30} color="#000" />
        <Icon name="chart-timeline-variant" size={30} color="#000" />
        <Icon name="airplane-takeoff" size={30} color="#000" />
        <Icon name="menu" size={30} color="#000" />
      </View>
      <StatusBar style="auto" />
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
    padding: 20,
  },
  actionsContainer: {
    paddingVertical: 10,
  },
  actionButton: {
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  actionText: {
    fontSize: 16,
  },
  accountContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  accountText: {
    fontSize: 18,
  },
  balanceText: {
    fontSize: 16,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 20,
    padding: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    paddingVertical: 10,
  },
});

export default App;

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
