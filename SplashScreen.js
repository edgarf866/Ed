import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

/*Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();*/

export default function SplashApp() {
  const [appIsReady, setAppIsReady] = useState(false); 

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // Return the LoginForm component when appIsReady is true
  if (appIsReady) {
    return (
      <View style={styles.container} onLayout={onLayoutRootView}>
        {/* LoginForm Component */}
      </View>
    );
  }

  // Return the splash screen when appIsReady is false
  return (
    <View style={styles.splashContainer}>
      <View style={styles.upperPart}>
        <Image source={require('./logo.png')} style={styles.image} />
      </View>
      <View style={styles.lowerPart}>
        <Text style={styles.title}>Bienvenue sur E-services👋</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  upperPart: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerPart: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 350, // Customize the image size according to your needs
    height: 200, // Customize the image size according to your needs
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Text color is now white
  },
});
