import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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