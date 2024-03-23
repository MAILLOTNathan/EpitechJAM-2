import { View, Text, TouchableOpacity, Alert } from "react-native"
import { Camera, CameraType, CameraPictureOptions, CameraOrientation } from 'expo-camera';

import styles from "../styles";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {

    let camera = Camera;

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission to camera was denied');
            }
        })();
    }, []);

    const __takePicture = async () => {
        if (!camera) return;
        console.log('Taking picture');
    }

    return (
        <View style={styles.mainView}>
            <Camera style={styles.childView}>
                <View
                style={{
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                flex: 1,
                width: '100%',
                padding: 20,
                justifyContent: 'space-between'
                }}
            >
                <View
                style={{
                alignSelf: 'center',
                flex: 1,
                alignItems: 'center'
                }}
                >
                    <TouchableOpacity
                    onPress={__takePicture}
                    style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: '#fff'
                    }}
                    />
                </View>
                </View>
            </Camera>
        </View>
    )
}