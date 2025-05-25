// app/tabs/event-preview.tsx

import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function EventPreview() {
  const router = useRouter();
  const { name, description, time, location, image } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your <Text style={styles.purple}>event</Text> is</Text>

      <View style={styles.userRow}>
        <Image source={require('../assets/images/icon.png')} style={styles.avatar} />
        <Text style={styles.username}>Fandel_pollo</Text>
        <Text style={{ marginLeft: 'auto', color: '#FFF', fontSize: 18 }}>⋮</Text>
      </View>

      <Image
        source={image ? { uri: image as string } : require('../assets/images/map.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/tabs/home')}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211F22',
    padding: 24,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  purple: {
    color: '#6339B0',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    marginBottom: 16,
  },
  info: {
    marginBottom: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 2,
  },
  location: {
    fontSize: 14,
    color: '#FFF',
  },
  button: {
    backgroundColor: '#6339B0',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

