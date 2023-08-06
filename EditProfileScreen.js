import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export const EditProfileScreen = ({ route, navigation }) => {
  // Récupérer les informations du profil à partir des paramètres de route
  const { userProfile } = route.params;

  // Variables d'état pour le formulaire de modification des informations
  const [name, setName] = useState(userProfile.name);
  const [number, setNumber] = useState(userProfile.number);
  const [email, setEmail] = useState(userProfile.email);
  

  // Fonction pour enregistrer les modifications et revenir à la page de profil
  const handleSaveChanges = () => {
    const updatedProfile = {
      ...userProfile,
      name: name,
      number: number,
      email: email,
      
    };
    // Vous pouvez ici enregistrer les modifications dans une base de données ou un backend
    // Puis, naviguer vers la page de profil avec les nouvelles informations
    navigation.navigate('Profile', { userProfile: updatedProfile });
  };

  return (
    <View style={styles.container}>
      {/* Formulaire de modification */}
      <Text style={styles.label}>Nom:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Entrez votre nom"
      />

      <Text style={styles.label}>Numero:</Text>
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={setNumber}
        placeholder="Entrez votre numéro"
      />
      
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Entrez votre email"
      />

      

      {/* Bouton pour enregistrer les modifications */}
      <TouchableOpacity onPress={handleSaveChanges} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Enregistrer les modifications</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  saveButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
