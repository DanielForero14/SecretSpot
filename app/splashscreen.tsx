import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Logo.png')} // Asegúrate de tener tu logo aquí
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>SecretSpot</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
