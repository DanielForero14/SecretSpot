import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/user-icon.png')} style={styles.icon} />
        <Text style={styles.headerText}>SecretSpot</Text>
        <Image source={require('../assets/images/menu-icon.png')} style={styles.icon} />
      </View>

      {/* Contenido central */}
      <View style={styles.centerContent}>
        <Text style={styles.question}>
          What do you want to do <Text style={styles.highlight}>today</Text>?
        </Text>

        <View style={styles.cards}>
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
        </View>
      </View>

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
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    color: '#1c1c1c',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#1c1c1c',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    top: -30,
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
