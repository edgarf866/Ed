import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';//

export const LoginPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
//
  // Fonction factice pour la connexion de l'utilisateur
  const handleLogin = () => {
    // Simulation de la vérification des informations d'identification
    const validPhoneNumber = '0123456789';
    const validPassword = 'password123';

    if (phoneNumber === validPhoneNumber && password === validPassword) {
      // Utilisateur authentifié avec succès
      // Dans une application réelle, vous pouvez utiliser une API pour authentifier l'utilisateur
      
      navigation.navigate('HomeScreen');
    } else {
      // Informations d'identification incorrectes, afficher un message d'erreur
      setError('Numéro de téléphone ou mot de passe incorrect.'); 
    }
  };

  // Fonction factice pour la récupération du mot de passe
  const handleForgotPassword = () => {
    // Navigation vers l'écran de récupération du mot de passe
    navigation.navigate('PhoneNumberPage');
  };

  // Fonction factice pour la navigation vers l'écran d'inscription
  const handleRegister = () => {
    // Navigation vers l'écran d'inscription
    navigation.navigate('RegistrationScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./Image.png')} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Numero de Telephone"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}> CONNEXION </Text>
      </TouchableOpacity>

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>
          Mot de passe oublié ?
        </Text>
         <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.registerButton}>Réinitialiser</Text>
        </TouchableOpacity>
       
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Vous n'avez pas de compte ?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerButton}>S'inscrire</Text>
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 180,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: 'black',
    marginRight: 10
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    marginRight: 10,
    
  },
  registerButton: {
    fontSize: 14,
    color: '#4267B2',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: 'blue',  
    padding: 10,
    width: '100%',
    height: 60,
    marginBottom: 30,
    borderRadius: 10,
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24, 
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 45,
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

export default LoginPage;
