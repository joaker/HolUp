import { StyleSheet } from "react-native";

export default StyleSheet.create({
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