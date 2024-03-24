import React, { useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import axios, { Axios, AxiosResponse } from 'axios';

import MapView, { Marker } from "react-native-maps";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { fa0, faGlobe, faMap } from "@fortawesome/free-solid-svg-icons";

interface Icomment {
    _id: string,
    latitude: string,
    longitude: string,
    title: string,
    description: string
}

export default function Map() {
    const [mapType, setMapType] = React.useState("standard");
    const [icon, setIcon] = React.useState(faGlobe);
    const [markers, setMarker] = useState<Icomment[]>([]);

    const getListOfData = async (): Promise<Icomment[]> => {
        try {
          const response = await axios.get<Icomment[]>("http://10.106.1.24:3000/comments");
          return response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
          throw new Error('Failed to fetch data');
        }
      };

    useEffect( () => {
        const fetchdata = async () => { try {
            const ListOfData = await getListOfData();
            setMarker(ListOfData)
        }
         catch(error) {
            console.log(error)
         }
        }; fetchdata();
    }, [] )
    console.log(markers)
    return (
        <View style={styles.container}>
            <View
            style={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            zIndex: 1,
            flex: 1,
            paddingBottom: 10,
            width: '100%',
            justifyContent: 'space-between'
            }}>
                <View
                style={{
                alignSelf: 'center',
                flex: 1,
                alignItems: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            if (mapType == "standard") {
                                setMapType("satellite");
                                setIcon(faMap);
                            } else {
                                setMapType("standard");
                                setIcon(faGlobe);
                            }
                        }}
                        style={{
                            width: 70,
                            height: 70,
                            bottom: 70,
                            right: 160,
                            borderRadius: 50,
                            backgroundColor: '#fff',
                            borderColor: '#F79A24',
                            borderWidth: 5
                        }}
                    >
                        <FontAwesomeIcon
                        style={{
                            left: 10,
                            top: 10,
                        }}
                        icon={icon}
                        size={40}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -20.9653823,
                    longitude: 55.6592917,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider={undefined}
                mapType={(mapType != undefined ? mapType as any: "standard")}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: parseFloat(marker.latitude),
                            longitude: parseFloat(marker.longitude),
                        }}
                        title={marker.title}
                        description={marker.description}
                        onCalloutPress={() => {console.log(marker.title)}}
                    />
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    map: {
        flex: 1,
    },
});




