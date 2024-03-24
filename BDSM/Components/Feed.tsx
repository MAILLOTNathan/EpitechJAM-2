import { View, Text, Image, ScrollView, Touchable, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import styles from "../styles";
import axios from "axios";
import { Alert } from "react-native";

interface  Ifeed
    {
        user_name: string,
        content: string,
        url: string
    };



function createFeed (data: Ifeed[]) {


    return data.map((item: any) => {
        return (
            <View style={styles.post}>
                <Image style={styles.postimg} source={{ uri: item.url }}/>
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

    const [feed, setFeed] = useState<Ifeed[]>([]);

const getDatabaseEntry = async (): Promise<Ifeed[]> => {
    try {
      const response = await axios.get<Ifeed[]>('http://10.106.1.24:3000/post');
        console.log('Database entry created:', response.data)
         return response.data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
  };

  useEffect( () => {
    const fetchdata = async () => { try {
        const ListOfData = await getDatabaseEntry();
        setFeed(ListOfData)
    }
     catch(error) {
        console.log(error)
     }
    }; fetchdata();
}, [] )

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