import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assurez-vous d'avoir installé react-native-vector-icons
import axios from 'axios'; 


export const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [location, setLocation] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  

  const handleRegistration = () => {
  if (!name || !phoneNumber || !password || !confirmPassword) {
    setError('Veuillez remplir tous les champs');
    return; 
  }

  if (password !== confirmPassword) { 
    setError('Les mots de passe ne correspondent pas'); 
    return;
  }

  // Envoyer les informations à votre API (backend) pour inscription
  const newUser = {
    name,
    surname: surName,
    email,
    phone_number: phoneNumber,
    location,
    password,
  };

  axios.post('http://192.168.1.81/API/api.php', newUser)
    .then(response => {
      if (response.data.success) {
        // L'inscription a réussi, rediriger l'utilisateur vers la page de connexion
        navigation.navigate('LoginPage');
      } else {
        // Afficher un message d'erreur en cas d'échec de l'inscription
        setError('Une erreur est survenue lors de l\'inscription');
      }
    })
    .catch(error => {
      // Gérer l'erreur en cas de problème de connexion
      console.error('Erreur lors de l\'inscription:', error);
      setError('Une erreur est survenue lors de l\'inscription');
    });
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Créer Mon compte</Text>
      <Text style={styles.subtitle}>Renseigner les champs suivants :</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={text => setName(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Prenoms" 
        value={surName} 
        onChangeText={text => setSurName(text)} 
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email} 
        onChangeText={text => setEmail(text)} 
      />
      <TextInput
       style={styles.input}
        placeholder="Numero de Telephone"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
       
      <TextInput
        style={styles.input}
        placeholder="Localisation" 
        value={location} 
        onChangeText={text => setLocation(text)} 
      />
       <View style={styles.passwordContainer}>
          <TextInput
        style={styles.passwordInput}
        placeholder="Mot de passe"
        secureTextEntry={!passwordVisible}
        value={password}
        onChangeText={text => setPassword(text)}
      />
       <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.iconContainer}>
          <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="gray" />
        </TouchableOpacity>
       </View>
       <View style={styles.passwordContainer}>
         <TextInput
        style={styles.passwordInput}
        placeholder="Confirmer votre mot de passe"
        secureTextEntry={!passwordVisible}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)} 
      />
      <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.iconContainer}>
          <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="gray" />
        </TouchableOpacity>
       </View>
      

      <TouchableOpacity style={styles.registrationButton} onPress={handleRegistration}>
        <Text style={styles.buttonText}> INSCRIPTION </Text>
      </TouchableOpacity>
      {/* Affichage des messages d'erreur ou de succès */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
       
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Couleur d'arrière-plan
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4267B2', // Couleur du titre
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'blue', 
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white', // Couleur de fond des champs de saisie
  },
   errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    marginBottom: 10,
  },
   registrationButton: {
    backgroundColor: 'blue',  
    padding: 10,
    width: '85%',
    height: 60,
    marginBottom: 30,
    borderRadius: 10,
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Times New Roman',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
   passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  }, 
  iconContainer: {
    padding: 10,
  },
  passwordInput: {
    flex: 1,
  }, 


});

export default RegistrationScreen;
 