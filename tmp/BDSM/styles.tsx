import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#6666669f',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'space-between',
      borderRadius: 2,
      padding: 20,
      margin: 5,
      color: '#fff',
      width: (Dimensions.get('window').width - 10000),
    },
    buttons: {
      backgroundColor: '#F79A24',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      padding: 20,
      margin: 20,
    },
    buttonText: {
      fontSize: 20,
    },
    titleText: {
      fontSize: 40,
      textAlign: 'center',
      color: '#F79A24',
      marginBottom: 40,
    }
  });

export default styles