// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed de Fotos</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PhotoDetail')}>
        <Text>Ver Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
