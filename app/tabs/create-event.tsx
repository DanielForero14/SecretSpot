import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CreateEventScreen() {
  const router = useRouter();

  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [coverImageUri, setCoverImageUri] = useState(
    '../../assets/images/photos.png'
  );

  const handleCreateEvent = () => {
    router.push({
      pathname: '../event-preview',
      params: {
        name: eventName,
        description: eventDescription,
        time: eventTime,
        location: eventLocation,
        image: coverImageUri,
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>Fandel_pollo</Text>

        {/* Corazón arriba a la derecha con posición absoluta */}
        <TouchableOpacity
          onPress={() => router.push('/notify')}
          style={styles.heartButton}
        >
          <Text style={styles.heart}>♡</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Event name:</Text>
      <TextInput
        style={styles.input}
        value={eventName}
        onChangeText={setEventName}
        placeholder=""
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Event description:</Text>
      <TextInput
        style={styles.input}
        value={eventDescription}
        onChangeText={setEventDescription}
        placeholder=""
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>What time is the event?:</Text>
      <TextInput
        style={styles.input}
        value={eventTime}
        onChangeText={setEventTime}
        placeholder=""
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        value={eventLocation}
        onChangeText={setEventLocation}
        placeholder=""
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Cover image:</Text>
      <TextInput
        style={styles.input}
        value={coverImageUri}
        onChangeText={setCoverImageUri}
        placeholder=""
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateEvent}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#211F22',
    padding: 24,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    position: 'relative', // para el absoluto dentro
  },
  username: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  heartButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 8,
  },
  heart: {
    fontSize: 24,
    color: '#FFF',
  },
  label: {
    color: '#FFF',
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'rgba(99, 57, 176, 0.17)',
    color: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#A08EC2',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 12,
  },
  buttonText: {
    color: '#211F22',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
