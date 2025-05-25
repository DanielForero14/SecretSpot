import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
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
          <TouchableOpacity>
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
  );
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#211F22',
      alignItems: 'center',
      paddingVertical: 24,
      paddingBottom: 100, // para que no lo tape el bottom tab
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

  
