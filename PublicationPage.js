import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

export const PublicationPage = () => {
  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
   const [error, setError] = useState('');
  
  const navigation = useNavigation();


  const handleTakePhoto = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.uri);
      }
    } else {
      console.log('Permission to use camera denied.');
    }
  };

  const handleChooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

    const handlePublish = () => {
    // Vérifiez que toutes les données obligatoires ont été saisies
    if (title && location && phoneNumber && image) {
      // Données à envoyer à la page d'accueil (HomeScreen)
      const dataToPass = {
        title,
        location,
        phoneNumber,
        image,
      };

      // Appel de la fonction pour ajouter les nouvelles données à la liste contentData dans HomeScreen
      navigation.navigate('Screen1', { dataToPass });
    } else {
      setError('Veuillez remplir toutes les informations avant de publier.');
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nom et Prenoms"
        value={fullName}
        onChangeText={text => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Type de Services"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.input1}
        placeholder="Décrivez votre service proposé"
        multiline
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Numéro de Téléphone"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Lieu de votre de Services"
        value={location}
        onChangeText={text => setLocation(text)}
      />

      {/* Section galerie */}
      <View style={styles.galleryContainer}>
        {image && (
          <Image source={{ uri: image }} style={styles.galleryImage} resizeMode="cover" />
        )}
        <TouchableOpacity style={styles.galleryButton} onPress={handleChooseImage}>
          <Icon name="image" size={35} color="white" />
          <Text style={styles.galleryButtonText}>
            Sélectionnez une image réelle
          </Text>
        </TouchableOpacity>

        {/* Bouton pour prendre une photo avec la caméra */}
        <TouchableOpacity style={styles.galleryButton} onPress={handleTakePhoto}>
          <Icon name="camera" size={35} color="white" />
          <Text style={styles.galleryButtonText}>Prendre une photo</Text>
        </TouchableOpacity>
      </View>

      {/* Bouton "Publier" */}
      <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
        <Text style={styles.publishButtonText}>Publier Votre Annonce</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    height: 50,
  },
  input1: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    height: 100,
  },
  galleryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  galleryImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 8,
  },
  galleryButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 5,
  },
  galleryButtonText: {
    color: 'white',
    marginLeft: 12,
    fontFamily: 'Times New Roman',
  },
  publishButton: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  }, errorText: {
    color: 'red',
    marginTop: 10,
  },
  publishButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
});

export default PublicationPage;
