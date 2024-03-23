import { View, Text, TouchableOpacity } from "react-native"
import { Camera } from 'expo-camera';

import styles from "../styles";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {

    let x = false;
    let d = Camera.Constants.Type;
    const [hasPermission, setHasPermission] = useState(x);

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
        <View style={styles.mainView}>
            <Camera style={styles.childView}>
                <View style={styles.deepView}>
                    <TouchableOpacity
                    style={styles.touchStyle}
                    >
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}