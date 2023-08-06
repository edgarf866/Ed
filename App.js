import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

class RegistrationApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>User Registration Form</Text>
        <RegistrationForm />
      </View>
    );
  }
}

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    registrationStatus: '',
  };

  _registerUser = async () => {
    const apiUrl = 'http://192.168.1.10/p/register.php'; // Remplacez par votre URL d'API

    try {
      const response = await axios.post(apiUrl, {
        nomUtilisateur: this.state.username,
        motDePasse: this.state.password,
        email: this.state.email,
      });

      if (response.status === 200) {
        this.setState({ registrationStatus: 'Enregistrement réussi.' });
        console.log('Enregistrement réussi.');
        this.clearForm();
      } else {
        throw new Error(`Erreur lors de l'enregistrement : ${response.status}`);
      }
    } catch (error) {
      this.setState({
        registrationStatus: `Erreur lors de l'enregistrement : ${error.message}`,
      });
      console.log(`Erreur lors de l'enregistrement : ${error.message}`);
    }
  };

  clearForm = () => {
    this.setState({
      username: '',
      password: '',
      email: '',
    });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <Button
          title="Enregistrement"
          onPress={() => this._registerUser()}
        />
        <Text style={styles.status}>{this.state.registrationStatus}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 200,
  },
  formContainer: {
    width: '100%',
    padding: 16,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  status: {
    marginTop: 10,
    color: 'green',
  },
});

export default RegistrationApp;
