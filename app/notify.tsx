import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Configurar comportamiento cuando la notificación llega en primer plano
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function NotifyScreen() {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
          alert('Se necesitan permisos para notificaciones');
        }
      }
    })();
  }, []);

  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'SecretSpot 💬',
        body: '¡Explora nuevos eventos cerca de ti!',
      },
      trigger: {
        seconds: 5,
        repeats: false,
        channelId: 'default',
        type: 'time',
      } as any,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Flecha de regreso */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/tabs/home')}>
          <Ionicons name="arrow-back-outline" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Contenido principal */}
        <View style={styles.content}>
          <Text style={styles.title}>Notificación de prueba</Text>
          <TouchableOpacity style={styles.button} onPress={scheduleNotification}>
            <Text style={styles.buttonText}>Programar notificación</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211F22', // fondo fijo
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#211F22', // mismo color para evitar blanco al hacer scroll más allá
    paddingTop: 50, // para que no tape la flecha fija
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 10,
    padding: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#A08EC2',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: '#211F22',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
