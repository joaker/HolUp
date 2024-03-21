import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Ensure you have this library installed

const ConfirmationScreen = ({ route, navigation }) => {
  const { recipient, amount } = route.params; // Assuming these details are passed from the TransactionScreen

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>&nbsp;</Text>
        <Text style={styles.headerText}>Confirmation</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Icon name="check-circle" size={60} color="green" style={styles.icon} />
        <Text style={styles.smallText}>{recipient.name} received your money</Text>
        <Text style={styles.largeText}>{amount}</Text>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{recipient.name[0]}</Text>
        </View>
        <Text style={styles.largeText}>{recipient.name}</Text>
        <Text style={styles.smallText}>Registered as {recipient.name.split(' ')[0].toUpperCase()}</Text>
        <Text style={styles.smallText}>{recipient.detail}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.footer} onPress={() => navigation.popToTop()}>
        <Text style={styles.footerText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 20,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  icon: {
    marginBottom: 20,
  },
  smallText: {
    fontSize: 16,
    marginBottom: 20,
  },
  largeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circleText: {
    fontSize: 40,
    color: 'white',
  },
  footer: {
    backgroundColor: 'blue',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ConfirmationScreen;