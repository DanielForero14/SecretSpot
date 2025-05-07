import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      
      <View style={styles.header}>
        <Image source={require('../assets/images/icon.png')} style={styles.icon} />
        <Text style={styles.headerText}>SecretSpot</Text>
        <Image source={require('../assets/images/icon.png')} style={styles.icon} />
      </View>

      {/* Question */}
      <Text style={styles.question}>
        What do you want to do <Text style={styles.highlight}>today</Text>?
      </Text>

      {/* Options */}
      <ScrollView contentContainerStyle={styles.cards}>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/images/explore.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>EXPLORE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/images/places.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>MY PLACES</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/images/photos.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>MY PHOTOS</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Logo */}
      <Image source={require('../assets/images/Logo.png')} style={styles.bottomLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  question: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  highlight: {
    color: '#9d4edd',
  },
  cards: {
    alignItems: 'center',
  },
  card: {
    width: 250,
    height: 100,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#9d4edd',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: 10,
    opacity: 0.8,
  },
  cardText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    zIndex: 1,
  },
  bottomLogo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginTop: 10,
  },
});
