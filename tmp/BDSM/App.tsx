import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import axios from 'axios';
import styles from './styles';

export default function App() {
  const [user, onChangeUser] = React.useState({
    prenom: "",
    nom: "",
    mail: "",
    age: '',
    password: "",
    nbOuverture: 0
  });


  const handleSubmit = async () => {
    if (user.prenom === '' || user.nom === '' || user.mail === '' || user.age === '' || user.password === '') {
      alert("Veuillez remplir toutes vos informations");
      return;
    }
    await axios.post("http://localhost:3000/", user).then(reponse => console.log("good"))
    .catch(error => {alert(error)});
  }

  return (
    <View style={styles.container}> 
      <Text style={styles.titleText}>Créez un compte :</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeUser({ ...user, prenom: text })}
        value={user.prenom}
        placeholder='Prénom'
      />
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeUser({ ...user, nom: text })}
        value={user.nom}
        placeholder='Nom'
      />
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeUser({ ...user, mail: text })}
        value={user.mail}
        placeholder='Mail'
      />
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeUser({ ...user, age: text })}
        value={user.age}
        placeholder='Age'
      />
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeUser({ ...user, password: text })}
        value={user.password}
        placeholder='Mot de passe'
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.buttons}>
        <Text style={styles.buttonText}>Créez</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

