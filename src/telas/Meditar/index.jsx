import { StyleSheet, Text, View, Flex } from 'react-native';
import React from 'react';
import Logo from '../../../assets/icons/Logo.svg';
import { Ionicons } from '@expo/vector-icons'


export default function Meditar() {
  return (
    
    <View style={styles.container}>
      <Logo style={styles.logo}/>
      <Text style={styles.natureza}> Temas Natureza  </Text>

      <View style={styles.alinhamento}> 

      <View style={styles.boxNatureza}>
        <Text style={styles.tema1}> Tema 1 </Text>
        <Text style={styles.play}> 
          <Ionicons  name="play-circle" size={40} color="white" /> 
        </Text>
      </View > 
  
      <View style={styles.boxClassicos}>
        <Text style={styles.tema2}> Tema 2 </Text>
      <Text style={styles.play}> 
          <Ionicons  name="play-circle" size={40} color="white" /> 
        </Text>
      </View>

      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logo: {
    marginTop: 70,
    marginLeft: 110
   },

  natureza: {
    marginTop: 60,
    marginLeft: 20,
    fontWeight: 'bold'
  },

  boxNatureza: {
    backgroundColor: '#329542',
    borderRadius: 20,
    width: 170,
    height: 150,
    marginLeft: 20,
    marginVertical: 20
  },

  boxClassicos: {
    backgroundColor: '#329542',
    borderRadius: 20,
    width: 170,
    height: 150,
    marginLeft: 15,
    marginVertical: 20
  },

  alinhamento: {
    display: 'flex',
    flexDirection: 'row'

  },

  play: {
    textAlign: 'center',
    marginTop: 20
  },

  tema1: {
    color: "#fff",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 40
  },

  tema2: {
    color: "#fff",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 40
  }
});
