import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.container}>
      {/* Barra superior (Cabeça) */}
      <View style={styles.header}>
        <Ionicons name="chatbubbles" size={24} color="white" />
        <Text style={styles.headerText}>MacielGram</Text>
      </View>

      {/* Sistema de rolagem usando Scroll */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Postagem 1 */}
        <View style={styles.postContainer}>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/157251097?v=4' }}
            style={styles.image}
          />
          <Text style={styles.text}>Ola, Me chamo Luis</Text>
          <Text style={styles.parte2}>Estudo e moro no Brasil 🇧🇷</Text>
          <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
            <Icon name="heart" size={20} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.likeCount}>{likes} Curtidas</Text>
        </View>

        {/* Postagem 2 */}
        <View style={styles.postContainer}>
          <Image
            source={{ uri: 'https://example.com/another-image.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>Outro usuário</Text>
          <Text style={styles.parte2}>Descrição da outra postagem</Text>
          <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
            <Icon name="heart" size={20} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.likeCount}>{likes} curtidas</Text>
        </View>

        {/* Adicione mais postagens conforme necessário */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    width: '100%',
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  postContainer: {
    padding: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    width: 300,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 12,
  },
  text: {
    color: 'gray',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  parte2: {
    color: 'white',
    marginBottom: 12,
  },
  likeButton: {
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 8,
  },
  likeCount: {
    color: 'gray',
  },
});
