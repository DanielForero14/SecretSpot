import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>REGISTER</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="EMAIL"
          style={styles.input}
          placeholderTextColor="#AAA"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="PASSWORD"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#AAA"
        />
      </View>

      <Text style={styles.footerText}>Create my account!</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '700',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1C1C1C',
    color: '#FFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  footerText: {
    color: '#AAA',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#A259FF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
