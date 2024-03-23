import { View, Text, Image, ScrollView, Touchable, TouchableOpacity } from "react-native";

import styles from "../styles";

const feed = [
    {
        user_name: "John",
        content: "This is a door",
        image: "../assets/post.png",
    },
    {
        user_name: "Oui",
        content: "This is a kbo",
        image: "../assets/post.png",
    }
];

function Post(data) {
    const picture = data.image;

    return (
        <View style={styles.post}>
            <TouchableOpacity style={styles.mylongbutton}>
                {/* <Image style={styles.avatar} source={{ uri: picture }}/> */}
                <Text>{data.user_name}</Text>
                <Text>{data.content}</Text>
            </TouchableOpacity>
        </View>
    )
}

function createFeed (data) {
    return data.map((item) => {
        return (
            <Post data={item}/>
        )
    })
}



export default function Feed () {

    return (
        <View style={styles.container}>
            <View style={styles.notificationpanel}>
                <ScrollView>
                    {createFeed(feed)}
                </ScrollView>
            </View>
        </View>
    )
}