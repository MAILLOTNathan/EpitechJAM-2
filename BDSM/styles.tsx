import { Dimensions, StyleSheet } from 'react-native';

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
        backgroundColor: '#fff',
        borderRadius: 10,
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
        width: (Dimensions.get('window').width),
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
    mybutton: {
        backgroundColor: '#F79A24',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 20,
        margin: 5,
    },
    mylongbutton: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#F79A24',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 2,
      padding: 20,
      margin: 5,
      width: (Dimensions.get('window').width - 20),
  },
    mylittlebutton: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#F79A24',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      padding: 5,
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
    profil: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      top: (Dimensions.get('window').width / 8),
      borderRadius: 5,
      margin: 5,
    },
    panel: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 5,
      top: (Dimensions.get('window').width / 2),
    },
    hud: {
        display: 'flex',
        backgroundColor: '#F79A24',
        top: 75,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 50,
        marginRight: 50,
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    mainView: {
        flex: 1,
    },
    childView: {
        flex: 1,
    },
    textStyle: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white'
    },
    deepView: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    touchStyle: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
});

export default styles;