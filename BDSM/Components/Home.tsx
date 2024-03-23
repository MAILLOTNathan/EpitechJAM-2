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
        camera._onCameraReady = async () => {
            let photo = await camera.takePictureAsync();
            console.log(photo);
            setPreviewVisible(true);
            setCapturedImage(photo);
        }
    }

    const CameraPreview = ({photo}: any) => {
        console.log('sdsfds', photo)
        return (
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              width: '100%',
              height: '100%'
            }}
          >
            <ImageBackground
              source={{uri: photo && photo.uri}}
              style={{
                flex: 1
              }}
            />
          </View>
        )
      }

    return ( previewVisible && capturedImage ? (
        <CameraPreview photo={capturedImage}></CameraPreview> ) : (
        <View style={styles.mainView}>
            import CameraPreview from "./CameraPreview";
            <Camera style={styles.childView}
                ref={(r) => {
                    if (r !== null)
                        camera = r
                }}
            >
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
    )
}