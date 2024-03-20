import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const generateMockRecipients = () => {
  const names = ["John Doe", "Jane Smith", "Nick Johnson", "Sara Connor", "Mike Tyson", "Lea Thompson", "Tom Cruise", "Jerry Seinfield", "Elaine Benes", "Cosmo Kramer", "George Costanza", "Bruce Wayne", "Clark Kent", "Diana Prince", "Barry Allen", "Hal Jordan", "Arthur Curry", "Billy Batson", "John Constantine", "Oliver Queen", "Ray Palmer", "Carter Hall", "Kara Danvers", "Barbara Gordon", "Helena Bertinelli", "Dinah Lance", "Zatanna Zatara", "Selina Kyle", "Harleen Quinzel", "Pamela Isley"];
  return names.map((name, index) => ({
    id: String(index),
    name,
    detail: Math.random() < 0.5 ? `${Math.floor(Math.random() * 10000)}@example.com` : `#${Math.floor(Math.random() * 10000)}`,
  }));
};

const RecipientsScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const recipients = generateMockRecipients();

  const filteredRecipients = searchText.length > 0 ? recipients.filter(r => r.name.toLowerCase().includes(searchText.toLowerCase())) : recipients;

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <View style={styles.recipientRow}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>{item.name[0]}</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.recipientName}>{item.name}</Text>
              <Text style={styles.recipientDetail}>{item.detail}</Text>
            </View>
          </View>
        )}
        ListHeaderComponent={
          <Text style={styles.sectionHeader}>Recent Recipients</Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: 'gray',
    color: 'white',
    padding: 10,
  },
  recipientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#000',
    fontSize: 20,
  },
  recipientName: {
    fontSize: 16,
  },
  recipientDetail: {
    fontSize: 14,
    color: 'grey',
  },
});

export default RecipientsScreen;