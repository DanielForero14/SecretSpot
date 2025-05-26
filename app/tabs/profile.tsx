import { useRouter } from 'expo-router';
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
  const [activeTab, setActiveTab] = useState<'gallery' | 'visited' | 'saved'>(
    'gallery'
  );
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.username}>Fandel_pollo</Text>
          <Text style={styles.name}>Antonio</Text>
        </View>

        {/* Corazón arriba a la derecha con posición absoluta */}
        <TouchableOpacity
          onPress={() => router.push('../notify')}
          style={styles.heartButton}
        >
          <Text style={styles.heart}>♡</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.stats}>
        <Text style={styles.statText}>3{"\n"}Lugares</Text>
        <Text style={styles.statText}>2,000{"\n"}Exploradores</Text>
        <Text style={styles.statText}>180{"\n"}Guardados</Text>
      </View>

      <Text style={styles.description}>
        Antonio{"\n"}Colombia - Bogotá{"\n"}fan del pollo {"<3"}
      </Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Compartir perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setActiveTab('gallery')}>
          <Text
            style={[styles.tab, activeTab === 'gallery' && styles.tabActive]}
          >
            ▦
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('visited')}>
          <Text
            style={[styles.tab, activeTab === 'visited' && styles.tabActive]}
          >
            🏠
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('saved')}>
          <Text style={[styles.tab, activeTab === 'saved' && styles.tabActive]}>
            📍
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'gallery' && (
        <View style={styles.gallery}>
          <Image
            source={require('../../assets/images/photos.png')}
            style={styles.photo}
          />
          <Image
            source={require('../../assets/images/photos.png')}
            style={styles.photo}
          />
          <Image
            source={require('../../assets/images/photos.png')}
            style={styles.photo}
          />
        </View>
      )}

      {activeTab === 'visited' && (
        <View style={styles.card}>
          <Image
            source={require('../../assets/images/photos.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Party central park</Text>
            <Text style={styles.cardDate}>14 - october - 2017</Text>
            <Text style={styles.cardLocation}>#Location</Text>
          </View>
        </View>
      )}

      {activeTab === 'saved' && (
        <View style={styles.card}>
          <Image
            source={require('../../assets/images/photos.png')}
            style={styles.cardImage}
          />
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
    position: 'relative', // para el botón absoluto
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
  heartButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 8,
  },
  heart: {
    color: '#FFF',
    fontSize: 24,
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
    borderRadius: 12,
  },
  card: {
    backgroundColor: '#6339B0',
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardTextContainer: {
    padding: 12,
    flex: 1,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDate: {
    color: '#999',
    fontSize: 14,
    marginBottom: 4,
  },
  cardLocation: {
    color: '#6339B0',
    fontSize: 14,
  },
});
