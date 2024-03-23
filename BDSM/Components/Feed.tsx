import { View, Text, Image, ScrollView, Touchable, Dimensions } from "react-native";

import styles from "../styles";

const feed = [
    {
        user_name: "John",
        content: "This is a door",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRgxjtjYT2tA88LTt_f6r_GXfMFLKNNQ53MwqU_uIFA&s",
    },
    {
        user_name: "Oui",
        content: "This is a kbo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRgxjtjYT2tA88LTt_f6r_GXfMFLKNNQ53MwqU_uIFA&s",
    }
];

function createFeed (data) {
    return data.map((item) => {
        return (
            <View style={styles.post}>
                <Image style={styles.postimg} source={{ uri: item.image }}/>
                <View style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        justifyContent:'space-between',
                        width: (Dimensions.get('window').width - 70),
                    }
                }>
                    <Text style={styles.posttitle}>{item.user_name}</Text>
                    <Text>{item.content}</Text>
                </View>
            </View>
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