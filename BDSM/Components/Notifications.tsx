import { View, Text, ScrollView, Touchable, TouchableOpacity } from "react-native";

import styles from "../styles";

const data = [
    {
        name: "Julien",
        content: "posted a dick",
    },
    {
        name: "Benjo",
        content: "posted a kbo",
    },
    {
        name: "Noah",
        content: "posted a very big kbo",
    },
    {
        name: "Julien",
        content: "posted a dick",
    },
    {
        name: "Benjo",
        content: "posted a kbo",
    },
    {
        name: "Noah",
        content: "posted a very big kbo",
    },
    {
        name: "Julien",
        content: "posted a dick",
    },
    {
        name: "Benjo",
        content: "posted a kbo",
    },
    {
        name: "Noah",
        content: "posted a very big kbo",
    },
    {
        name: "Julien",
        content: "posted a dick",
    },
    {
        name: "Benjo",
        content: "posted a kbo",
    },
    {
        name: "Noah",
        content: "posted a very big kbo",
    },
    {
        name: "Julien",
        content: "posted a dick",
    },
    {
        name: "Benjo",
        content: "posted a kbo",
    },
    {
        name: "Noah",
        content: "posted a very big kbo",
    },
    {
        name: "Julien",
        content: "posted a dick",
    },
    {
        name: "Benjo",
        content: "posted a kbo",
    },
    {
        name: "Noah",
        content: "posted a very big kbo",
    },
];

function createNotifications (jsonData) {
    return jsonData.map((item) => {
        return (
            <TouchableOpacity style={styles.mylongbutton}>
                <Text>{item.name}</Text>
                <Text>{item.content}</Text>
            </TouchableOpacity>
        );
    });
}

export default function  Notifications () {
    return (
        <View style={styles.container}>
            <View style={styles.notificationpanel}>
                <ScrollView>
                    {createNotifications(data)}
                </ScrollView>
            </View>
        </View>
    )
}