import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default function Map() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -20.9653823,
                    longitude: 55.6592917,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: '100%',
        height: '100%',
    },
});