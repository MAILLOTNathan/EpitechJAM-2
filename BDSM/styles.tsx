import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cont: {
        backgroundColor: '#fff',
      },
      header: {
        marginTop:50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
      },
      avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      info: {
        marginLeft: 20,
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      username: {
        color: '#999',
        fontSize: 18,
      },
      stats: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
      },
      stat: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
      },
      statLabel: {
        color: '#999',
        fontSize: 14,
      },
      statValue: {
        fontSize: 18,
      },
      bio: {
        padding: 20,
        fontSize: 16,
        color: '#333',
      },
});

export default styles;