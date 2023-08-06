import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ResetPasswordPage = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>Retour</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Réinitialisation du mot de passe</Text>
      <Text style={styles.subtitle}>
        Un sms de réinitialisation du mot de passe vous a été envoyé. Veuillez vérifier votre boîte de réception.
      </Text>
      <Text style={styles.link}>Retourner à la page de connexion</Text>
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#4267B2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4267B2',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  link: {
    fontSize: 16,
    color: '#4267B2',
    textDecorationLine: 'underline',
  },
});

export default ResetPasswordPage;
