import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CadastroStyle from '../Styles/CadastroStyles';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const conectLogin = async () => {
    const response = await axios.get("http://localhost:8080/adm", { cpf, senha });
  };

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
