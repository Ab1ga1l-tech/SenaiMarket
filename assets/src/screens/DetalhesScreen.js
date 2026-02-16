import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetalhesScreen({ route }) {

  const { produto } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.emoji}>{produto.imagem}</Text>

      <Text style={styles.nome}>{produto.nome}</Text>

      <Text style={styles.preco}>{produto.preco}</Text>

      <Text style={styles.descricao}>
        Produto de alta qualidade, ideal para quem busca desempenho e tecnologia.
      </Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  preco: {
    fontSize: 22,
    color: 'green',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  descricao: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: '#555',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
