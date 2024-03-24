import { View, Text, TouchableOpacity, Alert, Dimensions, ImageBackground, Button } from "react-native"
import { Camera, CameraType, CameraPictureOptions, CameraOrientation, CameraProps } from 'expo-camera';

import styles from "../styles";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export default function Home() {

    let url: string;


    async function setUrl (oui: string) {
        url = oui;
    }

    const createDatabaseEntry = async () => {
      try {
        const response = await axios.post('http://10.106.1.24:3000/post', {
            user_name: "ajax",
            url: url,
            content: "c'est une photo"
        });
          console.log('Database entry created:', response.data);
        Alert.alert('Success', 'Database entry created successfully');
      } catch (error) {
        console.error('Error creating database entry:', error);
        Alert.alert('Error', 'Failed to create database entry');
      }
    };

    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)
    let camera: Camera;

    async function __takePicture() {
        let photo : any;
        if (!camera) return;
        photo = await camera.takePictureAsync();
        setPreviewVisible(true);
        setCapturedImage(photo);
        __savepics(photo);
    }

    async function __savepics(photo) {
        console.log('Photo saved')
        await setUrl(photo.uri)
        console.log('uri : ' + photo.uri)
        console.log(url)
        createDatabaseEntry()
    }

    async function __retakepics() {
        setCapturedImage(null);
        setPreviewVisible(false);
    }

    const CameraPreview = ({photo}: any) => {
        console.log('photo', photo)
        return (
          <View style={styles.CameraPreview}>
            <ImageBackground
              source={{uri: photo && photo.uri}}
              style={styles.childView}
            />
            <TouchableOpacity onPress={__retakepics} style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#666666',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 'auto',
                    borderRadius: 5,
                    padding: 10,
                }
            }>
                <Text>
                    Retake
                </Text>
            </TouchableOpacity>
          </View>
        )
      }

    return ( previewVisible && capturedImage ? (
        <CameraPreview photo={capturedImage} savepics={__savepics} retakepics={__retakepics}></CameraPreview> ) : (
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