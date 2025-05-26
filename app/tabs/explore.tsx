import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';

export default function ExploreScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'web') return;

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permiso de ubicación denegado');
        setLoading(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setLoading(false);
    })();
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.webContainer}>
        <Text style={styles.webText}>Mapa no disponible en la web</Text>
      </View>
    );
  }

  if (loading || !location) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#A259FF" />
        <Text style={{ color: '#fff', marginTop: 10 }}>Obteniendo ubicación...</Text>
      </View>
    );
  }

  const region: Region = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        customMapStyle={betterDarkStyle}
        showsUserLocation
      >
        {/* Puedes agregar más marcadores si lo deseas */}
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="Estás aquí"
        />
      </MapView>
    </View>
  );
}

// 🎨 Estilo del mapa oscuro legible
const betterDarkStyle = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#2b2b2b' }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d5d5d5' }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#000000' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#444' }],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211F22',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  webContainer: {
    flex: 1,
    backgroundColor: '#211F22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webText: {
    color: '#fff',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#211F22',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
