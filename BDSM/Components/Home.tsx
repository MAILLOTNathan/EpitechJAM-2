import { View, Text, TouchableOpacity, Alert, Dimensions, Button } from "react-native"
import { Camera, CameraType, CameraPictureOptions, CameraOrientation } from 'expo-camera';

import styles from "../styles";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
  
    if (!permission) {
      // Camera permissions are still loading
      return <View />;
    }
  
    if (!permission.granted) {
      // Camera permissions are not granted yet
      return (
        <View style={styles.container}>
          <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      );
    }
  
    function toggleCameraType() {
      setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
  
    return (
      <View style={style.container}>
        <Camera style={style.camera} type={type}>
          <View style={style.buttonContainer}>
            <TouchableOpacity style={style.button} onPress={toggleCameraType}>
              <Text style={style.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }

  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });