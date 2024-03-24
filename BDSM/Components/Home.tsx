import { View, Text, TouchableOpacity, Alert, Dimensions, ImageBackground, Button, Image, TextInput } from "react-native"
import { Camera, CameraType, CameraPictureOptions, CameraOrientation } from 'expo-camera';

import styles from "../styles";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export default function Home() {
    let url: string;
    let comment: string;


    async function setUrl (oui: string) {
        url = oui;
    }

    async function setComment (oui: string) {
        comment = oui;
    }

    const createDatabaseEntry = async () => {
      try {
        const response = await axios.post('http://10.106.1.24:3000/post', {
            user_name: "ajax",
            url: url,
            content: comment
          });
          return response.data;
        } catch (error) {
          Alert.alert('Error', 'Failed to create database entry');
        }
      };
    let photo : any;
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)
    let camera: Camera;

    async function __takePicture() {
      if (!camera) return;
      photo = await camera.takePictureAsync();
      setPreviewVisible(true);
      setCapturedImage(photo);
    }

    async function __savepics(photo : any) {
      console.log('Photo saved')
      console.log('uri : ' + photo.uri)
      console.log(url)
      await setUrl(photo.uri)
      createDatabaseEntry()
      await __retakepics()
    }

    async function __retakepics() {
      setCapturedImage(null);
      setPreviewVisible(false);
    }

    const CameraPreview = ({photo}: any) => {
      const [publish, setPublish] = useState(false);

      function handlePublish () {
        setPublish(true);
      }

      return (!publish ? (
        <View style={styles.container}>
          <View style={styles.CameraPreview}>
            <ImageBackground
              source={{uri: photo && photo.uri}}
              style={styles.childView}
              />
            <View style={styles.caminterface}>
              <Button color={'red'} title={"Retake"} onPress={__retakepics} />
              <Button color={'green'} title={"Publish"} onPress={handlePublish} />
            </View>
          </View>
        </View>) :
        (
          <View style={styles.publish}>
              <View>
                <Image style={styles.pubimg}
                  source={{uri: photo.uri}}
                  />
              </View>
              <TextInput onChangeText={text => setComment(text)} value={comment} placeholder="Comment" style={{
                width: (Dimensions.get('window').width - 100),
                minHeight: (Dimensions.get('window').height / 8),
                backgroundColor: 'white',
                borderColor: 'transparent',
                fontSize: 20,
                padding: 10,
                marginBottom: 50,
                textAlign: 'center',
                borderRadius: 5,
                textAlignVertical: 'center',
              }}>
              </TextInput>
              <View style={styles.caminterface}>
                <Button color={'red'} title={"Retake"} onPress={__retakepics} />
                <Button color={'green'} title={"Publish"} onPress={() => __savepics(photo)} />
              </View>
          </View>
        )
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