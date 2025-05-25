import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor ingresa tu correo y contraseña.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/tabs/home'); // Cambia a tu pantalla principal después del login
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error al iniciar sesión', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
        <Text style={styles.title}>LOGIN</Text>

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

        <TouchableOpacity onPress={() => router.push('/auth/register')}>
          <Text style={styles.footer}>Don’t have an account? Create one</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 24 }} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
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
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    letterSpacing: 1,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#6339B0',
    padding: 24,
    borderRadius: 16,
    width: '100%',
    marginBottom: 32,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
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
  footer: {
    color: '#A08EC2',
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  loginText: {
    color: '#A08EC2',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});
