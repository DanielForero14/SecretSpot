import { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'visited' | 'saved'>('gallery');

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image source={require('../../assets/images/icon.png')} style={styles.avatar} />
        <View>
          <Text style={styles.username}>Fandel_pollo</Text>
          <Text style={styles.name}>Antonio</Text>
        </View>
        <Text style={styles.heart}>♡</Text>
      </View>

      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.statText}>3{"\n"}Lugares</Text>
        <Text style={styles.statText}>2,000{"\n"}Exploradores</Text>
        <Text style={styles.statText}>180{"\n"}Guardados</Text>
      </View>

      {/* Descripción */}
      <Text style={styles.description}>Antonio{"\n"}Colombia - Bogotá{"\n"}fan del pollo {"<3"}</Text>

      {/* Botones */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Compartir perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs tipo Instagram */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setActiveTab('gallery')}>
          <Text style={[styles.tab, activeTab === 'gallery' && styles.tabActive]}>▦</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('visited')}>
          <Text style={[styles.tab, activeTab === 'visited' && styles.tabActive]}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('saved')}>
          <Text style={[styles.tab, activeTab === 'saved' && styles.tabActive]}>📍</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido según pestaña activa */}
      {activeTab === 'gallery' && (
        <View style={styles.gallery}>
          <Image source={require('../../assets/images/photos.png')} style={styles.photo} />
          <Image source={require('../../assets/images/photos.png')} style={styles.photo} />
          <Image source={require('../../assets/images/photos.png')} style={styles.photo} />
        </View>
      )}

      {activeTab === 'visited' && (
        <View style={styles.card}>
          <Image source={require('../../assets/images/photos.png')} style={styles.cardImage} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Party central park</Text>
            <Text style={styles.cardDate}>14 - october - 2017</Text>
            <Text style={styles.cardLocation}>#Location</Text>
          </View>
        </View>
      )}

      {activeTab === 'saved' && (
        <View style={styles.card}>
          <Image source={require('../../assets/images/photos.png')} style={styles.cardImage} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Hidden café in Bogotá</Text>
            <Text style={styles.cardDate}>2 - may - 2025</Text>
            <Text style={styles.cardLocation}>#SavedSpot</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211F22',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  username: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  name: {
    color: '#B8B8B8',
    fontSize: 14,
  },
  heart: {
    color: '#FFF',
    fontSize: 22,
    marginLeft: 'auto',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
  },
  description: {
    color: '#FFF',
    textAlign: 'left',
    marginBottom: 12,
    lineHeight: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#6339B0',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    color: '#888',
    fontSize: 20,
  },
  tabActive: {
    color: '#6339B0',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  gallery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardTextContainer: {
    padding: 12,
  },
  cardTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardDate: {
    color: '#BBB',
    fontSize: 14,
    marginTop: 2,
  },
  cardLocation: {
    color: '#6339B0',
    marginTop: 4,
    fontWeight: '600',
  },
});
