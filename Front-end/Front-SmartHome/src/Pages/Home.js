import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import CardStyle from "../Styles/CardStyles";

const ListarMoradores = () => {
  const [moradores, setMoradores] = useState([]);

  useEffect(() => {
    const buscarMoradores = async () => {
      try {
        const response = await axios.get('http://localhost:8080/morador');
        setMoradores(response.data);
      } catch (error) {
        console.error("Erro ao buscar moradores:", error);
      }
    };

    buscarMoradores();
  }, []);

  return (
    <ScrollView style={card.container}>
      {moradores.length > 0 ? (
        moradores.map((morador, index) => (
          <View key={index} style={card.item}>
            <Text>Nome: {morador.nome}</Text>
            <Text>Email: {morador.email}</Text>
            <Text>Bloco: {morador.bloco}</Text>
            <Text>Apartamento: {morador.aprtamento}</Text>
          </View>
        ))
      ) : (
        <Text style={card.textoCarregando}>Carregando moradores...</Text>
      )}
    </ScrollView>
  );
};

export default ListarMoradores;
