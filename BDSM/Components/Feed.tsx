import { View, Text, Image, ScrollView } from "react-native";

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
            <Image style={styles.avatar} source={{ uri: picture }}/>
            <Text>{data.user_name}</Text>
            <Text>{data.content}</Text>
        </View>
    )
}

function createFeed (data) {
    return (
        <ScrollView>
            {data.map((item, index) => (
                <Post key={index} data={item}/>
            ))}
        </ScrollView>
        )
}



export default function Feed () {

    return (
        <View style={styles.container}>
            {createFeed(feed)}
        </View>
    )
}