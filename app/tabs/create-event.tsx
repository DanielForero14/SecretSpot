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
    '../../assets/images/photos.png' // Puedes cambiar esto por carga de imagen en el futuro
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
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.username}>Fandel_pollo</Text>
        <Text style={styles.heart}>♡</Text>
      </View>

      {/* Formulario */}
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
  },
  username: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  heart: {
    marginLeft: 'auto',
    fontSize: 20,
    color: '#FFF',
  },
  label: {
    color: '#FFF',
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'rgba(99, 57, 176, 0.17)', // 17% opacity del morado 6339B0
    color: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#6339B0',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
