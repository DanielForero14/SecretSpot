import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/icon.png')} style={styles.logo} />
      <Text style={styles.title}>REGISTER</Text>

      <View style={styles.inputBox}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput style={styles.input} placeholder="" placeholderTextColor="#aaa" />
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput style={styles.input} secureTextEntry placeholder="" placeholderTextColor="#aaa" />
      </View>

      <TouchableOpacity>
        <Text style={styles.registerText}>Create my account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1c1c', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 60, height: 60, marginBottom: 20 },
  title: { fontSize: 24, color: '#fff', marginBottom: 30 },
  inputBox: { width: '80%', padding: 20, borderRadius: 15, backgroundColor: '#2a2a2a', borderColor: '#9d4edd', borderWidth: 2 },
  label: { color: '#fff', marginTop: 10 },
  input: { backgroundColor: '#444', color: '#fff', padding: 10, borderRadius: 10, marginTop: 5 },
  registerText: { marginTop: 20, color: '#9d4edd' },
});