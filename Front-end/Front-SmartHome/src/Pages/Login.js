import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CadastroStyle from '../Styles/CadastroStyles'
import axios from 'axios';

const Login = () => {
  const [cpf, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [moradores, setMoradores] = useState([]);
  const [visitantes, setVisitantes] = useState([]);
  const [funcionario, setFuncionario] = useState([]);

  const handleLogin = () => {
    console.log('Login com:', username, password);
  };

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

  function goToUsuario() {
    if (cpf == resMoradores.cpf || cpf == resVisitantes.cpf || cpf == resFuncionario.cpf) {
      props.navigation.navigate("Usuario");
    }
  }
  return (
    <View style={CadastroStyle.container}>
      <View style={CadastroStyle.form}>
        <Text style={CadastroStyle.title}>Login</Text>
        <TextInput
          style={CadastroStyle.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={CadastroStyle.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry
        />
       <TouchableOpacity style={CadastroStyle.botao}>
          <Text style={CadastroStyle.botaoLetra}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={CadastroStyle.botao}>
          <Text
            style={CadastroStyle.botaoLetra}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Login;
