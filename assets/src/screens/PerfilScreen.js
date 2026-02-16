import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function PerfilScreen({ navigation }) {

  function handleLogout() {
    navigation.replace("Auth");
  }

  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={styles.foto}
      />

      <Text style={styles.nome}>Usuário Teste</Text>

      <TouchableOpacity style={styles.botao} onPress={handleLogout}>
        <Text style={styles.botaoTexto}>Sair do App</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    width: '60%',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
