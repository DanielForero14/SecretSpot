import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ExplanationScreen() {
  const [page, setPage] = useState(0);
  const router = useRouter();

  // Datos de los slides
  const slides = [
    {
      text: (
        <>
          Use <Text style={styles.purple}>the map</Text> to{'\n'}find unique{'\n'}places.
        </>
      ),
      image: require('../assets/images/map.png'), // reemplaza con tu imagen
    },
    {
      text: (
        <>
          Notifications{'\n'}
          <Text style={styles.purple}>can inform you</Text>{'\n'}of new places.
        </>
      ),
      image: require('../assets/images/notification.png'), // reemplaza con tu imagen
    },
  ];

  // Avanzar slide o ir al home
  const handleContinue = () => {
    if (page < slides.length - 1) {
      setPage(page + 1);
    } else {
      router.replace('/tabs/home'); // ir directo a HomeScreen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{slides[page].text}</Text>

      <Image source={slides[page].image} style={styles.image} resizeMode="contain" />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>

      <View style={styles.dots}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, page === index && styles.dotActive]}
          />
        ))}
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
  text: {
    fontSize: 24,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 32,
    lineHeight: 34,
  },
  purple: {
    color: '#6339B0',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#6339B0',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#444',
  },
  dotActive: {
    backgroundColor: '#6339B0',
  },
});
