import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faBell, faNewspaper, faMap, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({navigation}) {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.mybutton} onPress={() => navigation.navigate("Notifications")}>
                <FontAwesomeIcon icon={faBell} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mybutton}>
                <FontAwesomeIcon icon={faNewspaper} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mybutton} onPress={() => navigation.navigate("Home")}>
                <FontAwesomeIcon icon={faCamera} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mybutton} onPress={() => navigation.navigate("Map")}>
                <FontAwesomeIcon icon={faMap} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mybutton} onPress={() => navigation.navigate("Profil")}>
                <FontAwesomeIcon icon={faUser} />
            </TouchableOpacity>
        </View>
    );
}