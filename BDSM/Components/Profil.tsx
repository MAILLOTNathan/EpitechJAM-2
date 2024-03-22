import React from 'react';
import { View, Image, Text, Button, Pressable } from 'react-native';
import styles from '../styles';

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
            <View style={styles.header}>
                <Image style={styles.avatar} source={require("../assets/favicon.png")}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{user_name}</Text>
                    <Text style={styles.username}>{user_tag}</Text>
                    <Button title="Edit Profile" onPress={() => {}} />
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
    );
}
