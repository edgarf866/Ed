import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel'; // Import de la bibliothèque de carrousel
import EditProfileScreen from './EditProfileScreen';



const Tab = createBottomTabNavigator();

const Screen1 = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredContent, setFilteredContent] = useState([]);

  // Données factices pour l'exemple
  const contentData = [
    { id: 1, image: require('./Image1.png'), description: 'Menuisier.Lieu de Service : Cocody Saint Jean.Contact: +2250789776028' },
    { id: 2, image: require('./Image6.png'), description: 'Mécanicien. Lieu de Service : Abobo Samake.Contact: +2250822456987' },
    { id: 3, image: require('./Image4.png'), description: 'Plombier.Lieu de Service : Yopougon Koute.Contact:  +2250789676028' },
    { id: 4, image: require('./Image3.png'), description: 'Menusier.Lieu de Service : Zone Cocody.Contact: +2250789776028' },
    { id: 5, image: require('./Image7.png'), description: 'Plombier.Lieu de Service : Port Bouet.Contact:+2250789776028' },
    { id: 6, image: require('./Image5.png'), description: 'Plombier.Lieu de Service : Marcory Remblais.Contact: +2250789776028' },
    { id: 7, image: require('./Coursier4.png'), description: 'Coursier.Lieu de Service :Partout.Contact:+2250789776028' },
    { id: 8, image: require('./Coursier3.png'), description: 'Coursier.Lieu de Service : Zone Koumassi.Contact:+2250789776028' },
    { id: 9, image: require('./Image10.png'), description: 'Mécanicien. Lieu de Service : Adjame 220.Contact: +2250822456987' },
    { id: 10, image: require('./Image2.png'), description: 'Menuisier.Lieu de Service : Plateau Dokui.Contact: +2250789776028' },
    { id: 11, image: require('./Coursier1.png'), description: 'Coursier.Lieu de Service :Partout.Contact: +2250789776028' },
    { id: 12, image: require('./Menusier2.png'), description: 'Menusier.Lieu de Service : Riviera Palmeraie.Contact: +2250789776028' },
    { id: 13, image: require('./mecanicien2.png'), description: 'Mécanicien. Lieu de Service : Plateau.Contact: +2250789776028' },
    { id: 14, image: require('./Plombier.png'), description: 'Plombier.Lieu de Service : Attecoube.Contact: +2250789776028' },
    { id: 15, image: require('./Coursier2.png'), description: 'Coursier.Lieu de Service : Zone Gonzacville.Contact: +2250789776028' },
    { id: 16, image: require('./Menusier1.png'), description: 'Menuisier.Lieu de Service : Yopougon. Contact: +2250789776028' },
    
    
    // ... Autres contenus
  ];

  // Fonction utilitaire pour traiter le texte avant de l'afficher
  const processText = (text) => {
    // Remplacer tous les points par un point suivi d'un retour à la ligne "\n"
    const processedText = text.replace(/\./g, '.\n');
    return processedText;
  };

  // Fonction de recherche pour filtrer le contenu en fonction de la recherche saisie
  const handleSearch = (text) => {
    setSearchText(text);
     console.log("Texte saisi :", text);
    const filteredData = contentData.filter(item =>
      item.description.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContent(filteredData);
  };

  const handleLogOut = () => {
    // Vous pouvez ajouter ici toute logique de déconnexion ou de nettoyage des données utilisateur si nécessaire.
    // Ensuite, naviguez vers la page de connexion en utilisant le nom de l'écran défini dans Stack.Navigator.
    navigation.navigate('LoginPage');
  }; 

   const handlePublication = () => {
    // Navigation vers la page de publication
    navigation.navigate('PublicationPage');
  };
  

  // Images du carrousel
  const carouselImages = [
    require('./Affiche5.png'),
    require('./Affiche3.png'),
    require('./Affiche4.png'),
    require('./Affiche2.png'),
    require('./Affiche1.png'),
    // Ajoutez ici d'autres images que vous souhaitez afficher dans le carrousel
  ];

   // Rendu des éléments du carrousel
  const renderCarouselItem = ({ item }) => (
    <Image source={item} style={styles.carouselImage} />
  );


  

 
  return (
    <View style={styles.container}> 
      <View style={styles.header}>
        <Text style={styles.headerTitle}>E-services</Text>
       

        {/* Bouton "LogOut" */}
        <TouchableOpacity onPress={handleLogOut} style={styles.logoutButton}>
          <Icon name="sign-out" size={24} color="white" />
          <Text style={styles.logoutButtonText}>Deconnexion</Text>
        </TouchableOpacity>
      </View>

     <View style={styles.carouselContainer}>
      {/* Carrousel d'images */}
      <Carousel
        data={carouselImages}
        renderItem={renderCarouselItem}
        sliderWidth={500}
        itemWidth={450}
        loop
        autoplay
        autoplayInterval={10000}
        containerCustomStyle={styles.carouselContainer}
        contentContainerCustomStyle={styles.carouselContentContainer}
      />
    </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher..."
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      
       {/* Bouton "Publier une Annonce" */}
        <TouchableOpacity onPress={handlePublication} style={styles.publicationButton}>
          <Text style={styles.publicationButtonText}>Publier une Annonce</Text>
        </TouchableOpacity>

      {/* Utiliser ScrollView pour afficher les données sous forme de cartes */}
     
      <ScrollView contentContainerStyle={styles.contentContainer}>
       
       {/* Afficher le contenu filtré ou le contenu complet */}
        {filteredContent.length > 0 ? (
          filteredContent.map(item => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardText}>{processText(item.description)}</Text>
            </View>
          ))
        ) : (
          contentData.map(item => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardText}>{processText(item.description)}</Text>
              <Image source={item.image} style={styles.cardImage} />
            </View>
          ))
        )}
        
      </ScrollView>
    </View>
  );
};



const Screen2 = () => (
  <View style={styles.tabScreen}>
    <Text>Contenu de l'écran 2</Text>
  </View>
);

const Screen3 = ({ navigation }) => {
  // Exemple de données factices pour le profil de l'utilisateur
  const [userProfile, setUserProfile] = useState({
    photo: require('./Image.png'), // Image de profil par défaut
    name: 'Edgar Kouassi',
    email: 'edgarkouassi70@gmail.com',
    number: '+225 0789776028',
  });

   

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Photo de profil */}
        <Image source={userProfile.photo} style={styles.profileImage} />

        {/* Informations du profil */}
        <Text style={styles.label}>Nom:</Text>
        <Text style={styles.value}>{userProfile.name}</Text>

        <Text style={styles.label}>Numero:</Text>
        <Text style={styles.value}>{userProfile.number}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userProfile.email}</Text>

        {/* Bouton pour accéder au formulaire de modification */}
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfileScreen', { userProfile })}
          style={styles.editButton}
        >
          <Text style={styles.editButtonText}>Modifier les Informations</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          headerShown: false, // Masquer le nom "Screen 1" dans l'en-tête
          tabBarLabel: 'Acceuil', // Masquer le nom "Screen 1"
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Screen2}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => <Icon name="th-large" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Screen3}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: '5%',
    backgroundColor: 'blue',
    marginBottom: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Times New Roman',
  
    
  },
  notificationButton: {
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',   
    alignItems: 'center',
  },
  tabScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5, // Pour ajouter un espacement entre l'icône et le texte du bouton
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 25,
    borderRadius: 8,
    marginBottom: 10,
     height: 45,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  // Nouveau style pour les cartes
  contentContainer: {
    paddingVertical: 20, // Espacement entre le contenu et le bas de l'écran
    paddingHorizontal: 20, // Espacement horizontal pour les cartes
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
   publicationButton: { 
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    height: 45,
    marginHorizontal: 60,
  },
  publicationButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman' 
  },
   // Styles du carrousel
  carouselContainer: {
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    
  },
  carouselContentContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  carouselImage: {
    width: 330, // Largeur de chaque image dans le carrousel (peut être ajustée en fonction de vos besoins)
    height: 205, // Hauteur de chaque image dans le carrousel (peut être ajustée en fonction de vos besoins)
    borderRadius: 8,
    marginHorizontal: 10,
  },
  profileContainer: {
    borderColor: 'blue',
    width: '80%', // Vous pouvez ajuster la largeur selon vos besoins
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  editButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20, // Ajout d'un espacement entre le contenu et le bouton
  },
  editButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: 'black'
  },

});

export default HomeScreen;
 