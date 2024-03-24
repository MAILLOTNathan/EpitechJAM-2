import { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import axios from "axios";

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

interface  INotif
    {
        user_name: string,
        content: string,
        url: string
    };

function createNotifications (jsonData: INotif[]) {
    return jsonData.map((item) => {
        return (
            <TouchableOpacity style={styles.mylongbutton}>
                <Text>{item.user_name}</Text>
                <Text>posted.</Text>
            </TouchableOpacity>
        );
    });
}

export default function  Notifications () {
    const [feed, setFeed] = useState<INotif[]>([]);

    const getDatabaseEntry = async (): Promise<INotif[]> => {
        try {
        const response = await axios.get<INotif[]>('http://10.106.1.24:3000/post');
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
                    {createNotifications(feed)}
                </ScrollView>
            </View>
        </View>
    )
}