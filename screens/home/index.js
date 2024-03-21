import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { quickActions, accounts } from './mocks';
import styles from './styles';

const HomeScreen = ({ navigation }) => {

    const renderQuickAction = ({ item }) => {

        createOnPress = (item) => () => {
            // console.log(`clicked: ${item.title}`)
            if (item.screen) {
                // console.log(`navigating to: ${item.screen}`)
                navigation.navigate(item.screen)
            }
        }

        return (
            <TouchableOpacity style={styles.actionButton} onPress={createOnPress(item)}>
                <Text style={styles.actionText}>{item.title}</Text>
            </TouchableOpacity>
        );
    }

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
        </SafeAreaView>
    );
};

export default HomeScreen;