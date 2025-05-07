import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>REGISTER</Text>

      <View style={styles.inputBox}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput style={styles.input} placeholder="" placeholderTextColor="#aaa" />
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput style={styles.input} secureTextEntry placeholder="" placeholderTextColor="#aaa" />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Already have an account? <Link href="/login"><Text style={styles.link}>Login</Text></Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1c1c', alignItems: 'center', justifyContent: 'center' },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: { fontSize: 24, color: '#fff', marginBottom: 30 },
  inputBox: {
    width: '80%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#2a2a2a',
    borderColor: '#9d4edd',
    borderWidth: 2,
  },
  label: { color: '#fff', marginTop: 10 },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#9d4edd',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  bottomText: { marginTop: 20, color: '#ccc' },
  link: { color: '#9d4edd' },
});
