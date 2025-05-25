// Navegación entre pantallas
import { useRouter } from 'expo-router';

// Componentes nativos de React Native
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Componente principal: pantalla de login
export default function LoginScreen() {
  const router = useRouter(); // Hook para cambiar de pantalla

  return (
    // Vista principal (pantalla completa, fondo oscuro)
    <View style={styles.container}>
      {/* Contenedor del contenido centrado y con ancho fijo */}
      <View style={styles.content}>
        
        {/* Logo grande */}
        <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />

        {/* Título "LOGIN" */}
        <Text style={styles.title}>LOGIN</Text>

        {/* Tarjeta morada con campos de formulario */}
        <View style={styles.card}>
          {/* Texto encima del campo de email */}
          <Text style={styles.label}>EMAIL</Text>
          {/* Campo de entrada de email */}
          <TextInput
            placeholder=""
            style={styles.input}
            placeholderTextColor="#AAA"
            autoCapitalize="none"
          />

          {/* Texto encima del campo de password */}
          <Text style={styles.label}>PASSWORD</Text>
          {/* Campo de entrada de contraseña */}
          <TextInput
            placeholder=""
            style={styles.input}
            placeholderTextColor="#AAA"
            secureTextEntry
          />
        </View>

        {/* Enlace para ir a registro */}
        <TouchableOpacity onPress={() => router.push('/auth/register')}>
          <Text style={styles.footer}>Don’t have an account? Create one</Text>
        </TouchableOpacity>

        {/* Botón de login (solo visual por ahora) */}
        <TouchableOpacity style={{ marginTop: 24 }}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    backgroundColor: '#211F22', // Fondo oscuro
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center',     // Centrado horizontal
    padding: 24,              // Espacio interior general
  },
  content: {
    width: '100%',
    maxWidth: 360, // Ancho máximo como en móvil
    alignItems: 'center', // Centrado interno
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
    backgroundColor: '#6339B0', // Fondo morado
    padding: 24,
    borderRadius: 16,
    width: '100%',
    marginBottom: 32,
  },
  label: {  //Titulos Email / Password
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#211F22', // Fondo de input oscuro
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    color: '#FFF',              // Texto blanco
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
