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

      {/* Cards */}
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

            {/* Bottom bar with logo */}
        <View style={styles.footer}>
            <View style={styles.logoWrapper}>
                <Image source={require('../assets/images/Logo.png')} style={styles.bottomLogo} />
            </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  question: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },
  highlight: {
    color: '#9d4edd',
  },
  cards: {
    alignItems: 'center',
  },
  card: {
    width: 270,
    height: 90,
    borderRadius: 14,
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
    borderRadius: 12,
    opacity: 0.8,
  },
  cardText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    zIndex: 1,
  },
  footer: {
    backgroundColor: '#fff',
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  
  logoWrapper: {
    position: 'absolute',
    top: -30, // para que se superponga
    backgroundColor: '#1c1c1c',
    padding: 15,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  bottomLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },  
});
