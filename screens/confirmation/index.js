import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Ensure you have this library installed
import styles from './styles';

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



export default ConfirmationScreen;