import { View, Text, TouchableOpacity, Alert, Dimensions, ImageBackground } from "react-native"
import { Camera, CameraType, CameraPictureOptions, CameraOrientation, CameraProps } from 'expo-camera';

import styles from "../styles";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {

    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)

    let camera: Camera;

    async function __takePicture() {
        if (!camera) return;
        let photo = await camera.takePictureAsync();
        console.log(photo);
        setPreviewVisible(true);
        setCapturedImage(photo);
    }

    const CameraPreview = ({photo}: any) => {
        console.log('photo', photo)
        return (
          <View style={styles.CameraPreview}>
            <ImageBackground
              source={{uri: photo && photo.uri}}
              style={styles.childView}
            />
          </View>
        )
      }

    return ( previewVisible && capturedImage ? (
        <CameraPreview photo={capturedImage}></CameraPreview> ) : (
        <View style={styles.mainView}>
            <Camera style={styles.childView} ref={(r) => {
                    if (r !== null)
                        camera = r
            }}>
            <View style={styles.Camera1}>
                <View style={styles.Camera2}>
                    <TouchableOpacity
                    onPress={__takePicture}
                    style={styles.TakePics}
                    />
                </View>
            </View>
            </Camera>
        </View>
        )
    )
}