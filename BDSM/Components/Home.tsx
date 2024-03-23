import { View, Text, TouchableOpacity, Alert, Dimensions } from "react-native"
import { Camera, CameraType, CameraPictureOptions, CameraOrientation } from 'expo-camera';

import styles from "../styles";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {

    let camera = Camera;

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
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
                paddingBottom: 10,
                width: '100%',
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
                    bottom: 80,
                    right: (Dimensions.get('window').width / 4),
                    borderRadius: 50,
                    backgroundColor: '#fff',
                    borderColor: '#F79A24',
                    borderWidth: 5
                    }}
                    />
                </View>
                </View>
            </Camera>
        </View>
    )
}