import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [nom, setNom] = useState('');
  const [prenoms, setPrenoms] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [motdepasse, setMotdepasse] = useState('');

  const handleInscription = async () => {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('prenoms', prenoms);
    formData.append('email', email);
    formData.append('telephone', telephone);
    formData.append('localisation', localisation);
    formData.append('motdepasse', motdepasse);

    try {
      const response = await fetch('http://http://192.168.1.81/API/komi.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        // Traitement en cas de succès (par exemple, navigation vers une autre page)
      } else {
        // Traitement en cas d'échec
      }
    } catch (error) {
      // Gérer les erreurs de connexion ou autres
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulaire d'inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />
       <TextInput
        style={styles.input}
        placeholder="Prénoms"
        value={prenoms}
        onChangeText={setPrenoms}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Numéro de téléphone"
        value={telephone}
        onChangeText={setTelephone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Localisation"
        value={localisation}
        onChangeText={setLocalisation}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={motdepasse}
        onChangeText={setMotdepasse}
        secureTextEntry
      />
      {/* Les autres champs de texte... */}
      <Button
        title="S'inscrire"
        onPress={handleInscription}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles...
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 8,
  },

});

export default App;
