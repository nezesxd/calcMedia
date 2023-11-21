import React, { useState } from 'react';
import { Alert ,View, TextInput, Text, Button, StyleSheet } from 'react-native';

const CalculadoraMedia = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [media, setMedia] = useState(null);

function calcularMedia() {
  const n1 = parseFloat(nota1);
  const n2 = parseFloat(nota2);
  const n3 = parseFloat(nota3);

  const CalcMedia = (n1 + n2 + n3) / 3;
  setMedia(CalcMedia.toFixed(2));

};
   
  return (
    <View style={estilo.container}>



      <View style={estilo.containerForm}>

        <Text style={estilo.textoTitulo}>Media Calculator</Text>
        <TextInput
          style={estilo.inputCaixa}
          placeholder="Nota 1"
          keyboardType="numeric"
          value={nota1}
          onChangeText={(text) => setNota1(text)}
        />
        <TextInput
          style={estilo.inputCaixa}
          placeholder="Nota 2"
          keyboardType="numeric"
          value={nota2}
          onChangeText={(text) => setNota2(text)}
        />
        <TextInput
          style={estilo.inputCaixa}
          placeholder="Nota 3"
          keyboardType="numeric"
          value={nota3}
          onChangeText={(text) => setNota3(text)}
        />

        <Button title="Calcular Média" onPress={calcularMedia} />

        {media !== null && media > 7 &&<Text style={estilo.aprovado}>Média: {media} Aprovado !!</Text>}
        {media !== null && media < 7 &&<Text style={estilo.reprovado}>Média: {media} Reprovado !!</Text>}
      </View>


    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    padding: 20,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6495ED',
  },

  containerForm:{
    backgroundColor:'white',
    padding:50,
    borderRadius:30,
    alignItems:'center',
    gap:10,
  },

  inputCaixa: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  
  textoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  aprovado: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color:'green',
  },

  reprovado: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color:'red',
  },

});

export default CalculadoraMedia;


{/*Coded By: 
          André Guilherme
          Gustavo Sacramento
          Vinicius Menezes
*/}