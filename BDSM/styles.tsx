import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mybutton: {
        backgroundColor: '#F79A24',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 20,
        margin: 5,
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#666666',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 'auto',
        borderRadius: 5,
        padding: 10,
    },
});

export default styles;