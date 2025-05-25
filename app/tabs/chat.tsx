// app/chat.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { getResponseFromGemini } from '../../services/gemini';


export default function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'bot'; text: string }>>([
    { role: 'bot', text: 'Hola, bienvenido al chatbot de SecretSpot. ¿En qué te puedo ayudar hoy?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: { role: 'user' | 'bot'; text: string } = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const botResponse = await getResponseFromGemini(input);
    if (botResponse) {
      setMessages((prev) => [...prev, { role: 'bot', text: botResponse }]);
    } else {
      setMessages((prev) => [...prev, { role: 'bot', text: "Hubo un problema al responder." }]);
    }

    setLoading(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.select({ ios: 'padding', android: undefined })}>
      <Text style={styles.header}>Asistente SecretSpot</Text>

      <ScrollView style={styles.chatArea} contentContainerStyle={{ paddingBottom: 80 }}>
        {messages.map((msg, index) => (
          <View key={index} style={msg.role === 'user' ? styles.userMsg : styles.botMsg}>
            <Text style={styles.msgText}>{msg.text}</Text>
          </View>
        ))}
        {loading && <Text style={styles.typing}>El bot está escribiendo...</Text>}
      </ScrollView>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu pregunta..."
          placeholderTextColor="#AAA"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211F22',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
    backgroundColor: '#6339B0',
  },
  chatArea: {
    flex: 1,
    padding: 16,
  },
  userMsg: {
    alignSelf: 'flex-end',
    backgroundColor: '#A08EC2',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  botMsg: {
    alignSelf: 'flex-start',
    backgroundColor: '#444',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  msgText: {
    color: '#FFF',
  },
  typing: {
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'left',
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#444',
    backgroundColor: '#211F22',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  input: {
    flex: 1,
    backgroundColor: '#333',
    color: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#A08EC2',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  sendText: {
    color: '#211F22',
    fontWeight: 'bold',
  },
});
