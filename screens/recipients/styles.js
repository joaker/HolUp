import { StyleSheet, } from 'react-native';

export default styles = StyleSheet.create({
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