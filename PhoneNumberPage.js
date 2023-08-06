import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export const PhoneNumberPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState(''); 

  const handleSendCode = () => {
   alert('Un sms de réinitialisation du mot de passe vous a été envoyé. Veuillez vérifier votre boîte de réception.!')
              
              color="#fff"
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Réinitialisation du Mot de Passe</Text>
      <Text style={styles.subtitle}>Renseigner votre numéro de téléphone</Text>

      <TextInput
        style={styles.input}
        placeholder="Numéro de téléphone" 
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <View style={styles.sendCodeContainer}>
        <Button title="Envoyer" onPress={handleSendCode} color='white'/> 
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4267B2',
    
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'regular',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
    sendCodeContainer: {
    width: '100%',
    height: 50,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
   backButton: {
    position: 'absolute',
    top: 48,
    left: 20,
  },
   backButtonText: {
    fontSize: 16,
    color: '#4267B2',
    fontWeight: 'bold'
  },
  link: {
    fontSize: 16,
    color: '#4267B2',
    textDecorationLine: 'underline',
  }, 
});
export default PhoneNumberPage;
 