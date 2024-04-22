import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';



const LoadingScreen = ({ navigation, route }) => {
  const { amount, recipient } = route.params;  // Note: only supports email with Paypal gateway

  useEffect(() => {
    const processTransaction = async () => {
      try {


        const amountValue = `${amount}`.slice(1); // remove leading identifier
        const url = `${process.env.EXPO_PUBLIC_API_URL}/payout?amount=${amountValue}&email=${recipient.detail}`;

        console.log(`Sending a GET request to: ${url}`);

        // Here you would call your API
        const response = await fetch(url, {
          method: 'GET', // or 'POST'
        });

        const result = await response.json();

        console.log({result});
        
        // Navigate to the ConfirmationScreen with the result
        navigation.navigate('Confirmation', { amount, recipient });
      } catch (error) {
        console.error('There was an error processing your transaction:', error);
        // Handle any errors, possibly navigate to an error screen
      }
    };

    processTransaction();
  }, [amount, recipient, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.banner}>Processing your transaction...</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    marginBottom: 20,
    fontSize: 18,
  },
});

export default LoadingScreen;