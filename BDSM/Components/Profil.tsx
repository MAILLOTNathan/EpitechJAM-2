import React from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faPenToSquare, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faQuestion, faGear } from '@fortawesome/free-solid-svg-icons';

export default function Profil() {

    let user_name = "user_name"
    let user_tag = "@user"

    let stats = [
        {
            name: "Followers",
            value: 0,
        },
        {
            name: "Following",
            value: 0,
        },
        {
            name: "Posts",
            value: 0,
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.profil}>
                <View style={styles.header}>
                    <Image style={styles.avatar} source={require("../assets/favicon.png")}/>
                    <View style={styles.info}>
                        <Text style={styles.name}>{user_name}</Text>
                        <Text style={styles.username}>{user_tag}</Text>
                        <TouchableOpacity style={styles.mylittlebutton}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                            <Text>
                                Edit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.stats}>
                    {stats.map((stat, index) => (
                        <View style={styles.stat} key={index}>
                            <Text style={styles.statLabel}>{stat.name}</Text>
                            <Text style={styles.statValue}>{stat.value}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.panel}>
                <TouchableOpacity style={styles.mylongbutton}>
                    <Text>
                        Help
                    </Text>
                    <FontAwesomeIcon icon={faQuestion} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.mylongbutton}>
                    <Text>
                        Preferences
                    </Text>
                    <FontAwesomeIcon icon={faGear} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.mylongbutton}>
                    <Text>
                        About
                    </Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
