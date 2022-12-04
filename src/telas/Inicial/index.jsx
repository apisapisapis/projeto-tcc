import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Logo from '../../../assets/icons/Logo.svg';
import { Ionicons } from '@expo/vector-icons'
//import Bixo from '../../../assets/icons/Bixo.svg'

export default function Inicial() {

  return (
    <View style={estilos.container}>
        <Logo style={estilos.logo} />
        <Text style={estilos.mensagem}> Olá, Lucas</Text>
        <Text style={estilos.subMensagem}> Desejamos tudo de bom para você!</Text>
        
      <View style={estilos.boxAvaliacao}> 
        <Text style={estilos.avaliacao}> Avaliação </Text>


        <TouchableOpacity style={estilos.boxBotaoIniciar}>
        <Text style={estilos.botaoIniciar}> INICIAR </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
   },

   logo: {
    marginTop: 70,
    marginLeft: 110
   },
  
  mensagem: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 40
  },

  subMensagem: {
    marginLeft: 10,
    fontStyle: 'italic'
  },

  boxAvaliacao: {
    backgroundColor: '#8E97FE',
    borderRadius: 20,
    width: 200,
    height: 130,
    marginLeft: 90,
    marginVertical: 70
  },

  avaliacao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15
  },

  boxBotaoIniciar: {
    backgroundColor: '#f2f2f2',
    width: 90,
    height: 40,
    marginLeft: 55,
    marginTop: 25,
    borderRadius: 20
  },

  botaoIniciar: {
    textAlign: 'center',
    marginTop: 9,
    fontWeight: 'bold',
    fontSize: 16
  },

});
