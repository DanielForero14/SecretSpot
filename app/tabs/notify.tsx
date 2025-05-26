// app/tabs/notify.tsx

import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';


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
    // Pedir permisos de notificación al cargar
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
        } as any, // workaround de tipado para que TS no se queje
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificación de prueba</Text>
      <TouchableOpacity style={styles.button} onPress={scheduleNotification}>
        <Text style={styles.buttonText}>Programar notificación</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211F22',
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
