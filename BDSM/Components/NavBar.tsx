import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faBell, faNewspaper, faMap, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.mybutton}>
                <FontAwesomeIcon icon={faBell} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mybutton}>
                <FontAwesomeIcon icon={faNewspaper} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mybutton}>
                <FontAwesomeIcon icon={faCamera} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mybutton}>
                <FontAwesomeIcon icon={faMap} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mybutton}>
                <FontAwesomeIcon icon={faUser} />
            </TouchableOpacity>
        </View>
    );
}