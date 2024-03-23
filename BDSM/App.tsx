import { StatusBar } from 'expo-status-bar';
import { Dimensions, Text, View } from 'react-native';

import styles from './styles';
import NavBar from './Components/NavBar';

import Profil from './Components/Profil';
import Home from './Components/Home';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{
          header: (props) =>
          <View>
            <Text style={styles.hud}>
              {props.route.name}
            </Text>
            <View style={{
              position: 'absolute',
              top: Dimensions.get('window').height - 45,
              left: 0,
              right: 0,
              height: 50,
              backgroundColor: '#fff',
            }}>
              <NavBar {...props} />
            </View>
          </View>,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profil" component={Profil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
