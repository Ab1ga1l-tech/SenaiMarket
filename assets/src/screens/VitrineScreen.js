import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { PRODUTOS } from '../data/Produtos';

export default function VitrineScreen({ navigation }) {

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Detalhes", { produto: item })}
      >
        <Text style={styles.emoji}>{item.imagem}</Text>
        <View>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>{item.preco}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUTOS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  emoji: {
    fontSize: 30,
    marginRight: 15,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
});

