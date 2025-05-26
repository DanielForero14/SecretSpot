import { router } from 'expo-router';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor ingresa email y contraseña.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, 'users', uid), {
        username: email.split('@')[0],
        displayName: '',
        description: '',
        location: '',
        profilePic: '',
      });

      router.replace('/explanation');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error al registrarse', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/images/LogoSinNombre.png')} style={styles.logo} />
        <Text style={styles.title}>SecretSpot</Text>
        <Text style={styles.subtitle}>Empieza a explorar lo que otros no ven</Text>

        <View style={styles.card}>
          <Text style={styles.label}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#AAA"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#AAA"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/auth/login')}>
          <Text style={styles.footer}>¿Ya tienes cuenta? Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211F22',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  content: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 130,
    marginBottom: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },
  subtitle: {
    color: '#A08EC2',
    fontSize: 16,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#6339B0',
    padding: 24,
    borderRadius: 16,
    width: '100%',
    marginBottom: 24,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#211F22',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    color: '#FFF',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#A08EC2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: '#211F22',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    color: '#A08EC2',
    fontSize: 14,
    textAlign: 'center',
  },
});
