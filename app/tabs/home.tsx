import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter(); // para navegación

  return (
    <View style={styles.container}> {/* Contenedor principal con fondo fijo */}
      <ScrollView
        contentContainerStyle={styles.scrollContent} // Fondo igual y flexGrow para ocupar toda el área
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.brand}>SecretSpot</Text>
              <View style={styles.row}>
                <Image
                  source={require('../../assets/images/icon.png')}
                  style={styles.userIcon}
                />
                <Text style={styles.question}>
                  What do you want to do <Text style={styles.today}>today</Text>?
                </Text>
              </View>
            </View>

            {/* Botón del corazón */}
            <TouchableOpacity onPress={() => router.push('../notify')}>
              <Ionicons name="heart-outline" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>

          {/* Post 1 */}
          <View style={styles.card}>
            <View style={styles.userRow}>
              <Image
                source={require('../../assets/images/icon.png')}
                style={styles.userPic}
              />
              <Text style={styles.username}>Pepito2005</Text>
              <Text style={styles.menuDots}>⋮</Text>
            </View>
            <Image
              source={require('../../assets/images/photos.png')}
              style={styles.postImage}
            />
            <View style={styles.actions}>
              <Ionicons name="heart-outline" size={22} color="#FFF" />
              <Ionicons name="chatbubble-outline" size={22} color="#FFF" />
              <Ionicons name="bookmark-outline" size={22} color="#FFF" />
            </View>
          </View>

          {/* Post 2 */}
          <View style={styles.card}>
            <View style={styles.userRow}>
              <Image
                source={require('../../assets/images/icon.png')}
                style={styles.userPic}
              />
              <Text style={styles.username}>miguelitopro77</Text>
              <Text style={styles.menuDots}>⋮</Text>
            </View>
            <Image
              source={require('../../assets/images/photos.png')}
              style={styles.postImage}
            />
            <View style={styles.actions}>
              <Ionicons name="heart-outline" size={22} color="#FFF" />
              <Ionicons name="chatbubble-outline" size={22} color="#FFF" />
              <Ionicons name="bookmark-outline" size={22} color="#FFF" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // importante para que ocupe toda la pantalla
    backgroundColor: '#211F22', // fondo fijo oscuro
  },
  scrollContent: {
    flexGrow: 1, // para que ScrollView ocupe todo el espacio disponible
    backgroundColor: '#211F22', // mismo color para evitar espacios en blanco
    paddingVertical: 24,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 360,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  userIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  brand: {
    color: '#6339B0',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  question: {
    color: '#FFF',
    fontSize: 14,
    flexShrink: 1,
  },
  today: {
    color: '#6339B0',
  },
  card: {
    marginBottom: 24,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userPic: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
    flex: 1,
  },
  menuDots: {
    color: '#FFF',
    fontSize: 18,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
  },
});
