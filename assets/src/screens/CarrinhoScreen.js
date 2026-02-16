import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CarrinhoScreen({ navigation }) {

  function continuarComprando() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.texto}>Seu carrinho está vazio 🛒</Text>

      <TouchableOpacity 
        style={styles.botao}
        onPress={continuarComprando}
      >
        <Text style={styles.botaoTexto}>Continuar Comprando</Text>
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
  texto: {
    fontSize: 18,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
