import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import axios from "axios";
import CardStyle from "../Styles/CardStyles";

const Home = (props) => {
  const [moradores, setMoradores] = useState([]);
  const [visitantes, setVisitantes] = useState([]);
  const [funcionario, setFuncionario] = useState([]);
  var session = JSON.parse(sessionStorage.getItem("user"));


  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resMoradores = await axios.get("http://localhost:8080/morador");
        setMoradores(resMoradores.data);

        const resVisitantes = await axios.get("http://localhost:8080/visita");
        setVisitantes(resVisitantes.data);

        const resFuncionario = await axios.get("http://localhost:8080/funcionario");
        setFuncionario(resFuncionario.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    buscarDados();
  }, []);
 

  return (
    <ScrollView style={CardStyle.container}>

      <View style={CardStyle.container}>
        <Text style={CardStyle.titulo}>Moradores</Text>
        <TouchableOpacity style={CardStyle.botao} onPress={() => props.navigation.navigate("Morador")}>
          <Text style={CardStyle.botaoLetra}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {moradores.length > 0 ? (
        moradores.map((morador, index) => (
          <View style={CardStyle.card}>
            <View key={`morador-${index}`} style={CardStyle.item}>
              <Text>Nome: {morador.nome}</Text>
              <Text>Bloco: {morador.bloco}</Text>
              <Text>Apartamento: {morador.apartamento}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={CardStyle.textoCarregando}>Carregando moradores...</Text>
      )}

      <View style={CardStyle.container}>
        <Text style={CardStyle.titulo}>Visitantes</Text>
        <TouchableOpacity style={CardStyle.botao} onPress={() => props.navigation.navigate("Visita")}>
          <Text style={CardStyle.botaoLetra}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      {visitantes.length > 0 ? (
        visitantes.map((visitante, index) => (
          <View style={CardStyle.card}>
            <View key={`visitante-${index}`} style={CardStyle.item}>
              <Text>Nome: {visitante.nome}</Text>
              <Text>Bloco: {visitante.bloco}</Text>
              <Text>Apartamento: {visitante.apartamento}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={CardStyle.textoCarregando}>Carregando visitantes...</Text>
      )}

      <View style={CardStyle.container}>
        <Text style={CardStyle.titulo}>Funcionarios</Text>
        <TouchableOpacity style={CardStyle.botao} onPress={() => props.navigation.navigate("Funcionario")}>
          <Text style={CardStyle.botaoLetra}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      {funcionario.length > 0 ? (
        funcionario.map((funcionario, index) => (
          <View style={CardStyle.card}>
            <View key={`funcionario-${index}`} style={CardStyle.item}>
              <Text>Nome: {funcionario.nome}</Text>
              <Text>Bloco: {funcionario.turno}</Text>
              <Text>Apartamento: {funcionario.funcao}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={CardStyle.textoCarregando}>Carregando funcionario...</Text>
      )}
    </ScrollView>
  );
};

export default Home;
