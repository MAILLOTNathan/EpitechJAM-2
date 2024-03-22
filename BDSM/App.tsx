import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './styles';
import NavBar from './Components/NavBar';
import Profil from './Components/Profil';

export default function App() {
  return (
    <View style={styles.container}>
      <Profil />
    </View>
  );
}
