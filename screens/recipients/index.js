import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { generateMockRecipients } from './mocks';
import styles from './styles';

const RecipientsScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const recipients = generateMockRecipients()

  console.log(recipients)

  const filteredRecipients = searchText.length > 0 ? recipients.filter(r => r.name.toLowerCase().includes(searchText.toLowerCase())) : recipients;

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* Zeroth Header Block */}
      <View style={styles.headerBlock}>
        <Text style={styles.headerText}>&nbsp;</Text>
      </View>
      {/* First Header Block */}
      <View style={styles.headerBlock}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Select Recipient</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Second Header Block */}
      <View style={styles.headerBlock}>
        <Icon name="magnify" size={24} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for recipient"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Icon name="plus" size={24} color="#000" />
        <Text style={{ marginLeft: 5 }}>Add</Text>
      </View>

      {/* Third Header Block */}
      <View style={styles.headerBlock}>
        <Icon name="qrcode-scan" size={24} color="#000" />
        <Text style={{ flexGrow: 1, marginLeft: 10, color: 'lightgray' }}>Scan QR code to pay with Zelle</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </View>

      {/* Recipient List */}
      <FlatList
        data={filteredRecipients}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Transaction', { recipient: item })}
          >
            <View style={styles.recipientRow}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>{item.name[0]}</Text>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.recipientName}>{item.name}</Text>
                <Text style={styles.recipientDetail}>{item.detail}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <Text style={styles.sectionHeader}>Recent Recipients</Text>
        }
      />
    </SafeAreaView>
  );
};

export default RecipientsScreen;