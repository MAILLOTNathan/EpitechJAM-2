import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './styles';
import NavBar from './Components/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar>
      </NavBar>
    </View>
  );
}
