import { View, Text } from "react-native"
import { Camera } from 'expo-camera';

import Map from "./Map";

import styles from "../styles";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {

    let x = false;
    let d = Camera.Constants.Type;
    const [hasPermission, setHasPermission] = useState(x);
    const [type, setType] = useState(d);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            let z = (status === 'granted');
            setHasPermission(z);
        })();
    }, []);

    let y = hasPermission === null
    if (y) {
        return <View />;
    }
    let p = hasPermission === false
    if (p) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera style={{ flex: 1 }} type={type}>
            </Camera>
        </View>
    )
}