import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
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
    { id: '3', name: 'Holiday Fund', balance: '$1,200', digits: '9876' },
    { id: '4', name: 'Investment Account', balance: '$15,000', digits: '5432' },
    { id: '5', name: 'Emergency Fund', balance: '$3,500', digits: '1010' },
    { id: '6', name: 'House Savings', balance: '$8,250', digits: '2020' },
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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Icon name="chat" size={24} color="#000" />
        <Icon name="home-outline" size={24} color="#000" />
        <Icon name="account-circle" size={24} color="#000" />
      </View>
      <FlatList
        data={accounts}
        renderItem={renderAccount}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <FlatList
              data={quickActions}
              renderItem={renderQuickAction}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.actionsContainer}
            />
            <Text style={styles.sectionTitle}>Accounts</Text>
          </>
        }
        ListFooterComponent={<View style={{ marginBottom: 60 }} />} // Space for the footer
      />
      <View style={styles.footer}>
        <Icon name="account" size={24} color="blue" />
        <Icon name="bank-transfer" size={24} color="#000" />
        <Icon name="chart-timeline-variant" size={24} color="#000" />
        <Icon name="airplane-takeoff" size={24} color="#000" />
        <Icon name="menu" size={24} color="#000" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40, // Increased top padding
    backgroundColor: '#fff', // Ensure the header blends with the background
    zIndex: 1,
  },
  actionsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  actionButton: {
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20, // More rounded borders
  },
  actionText: {
    fontSize: 14, // Smaller text for quick actions
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
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
