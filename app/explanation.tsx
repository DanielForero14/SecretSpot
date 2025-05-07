import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function ExplanationScreen() {
  const handleContinue = () => {
    router.push('/home'); // Cambia "/home" por la ruta real a la que debe ir
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EXPLANATION</Text>

      <View style={styles.card}>
        <Text style={styles.bullet}>
          • <Text style={styles.text}>Use <Text style={styles.link}>the map</Text> to find unique places.</Text>
        </Text>
        <Text style={styles.bullet}>
          • <Text style={styles.text}>Once you’re there, <Text style={styles.link}>the option to take a single photo will be enabled.</Text></Text>
        </Text>
        <Text style={styles.bullet}>
          • <Text style={styles.text}>Notifications <Text style={styles.link}>can inform you</Text> of new places.</Text>
        </Text>
      </View>

      <Text style={styles.description}>
        Find unique places, head there, and take a souvenir photo that will be etched in your memory forever.
      </Text>

      {/* Logo como botón */}
      <Pressable onPress={handleContinue}>
        <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  card: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#9d4edd',
    padding: 20,
    marginBottom: 25,
  },
  bullet: {
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
  link: {
    color: '#5f3dc4',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
