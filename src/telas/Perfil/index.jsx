import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text> Página Perfil </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
