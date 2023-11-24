import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Button,
  Alert,
  View,
} from 'react-native';
import axios from 'axios';
import CadastroStyle from "../Styles/CadastroStyles";

const RegisterResident = () => {
  const [form, setForm] = useState({
    nome: '',
    dataNascimento: '',
    sexo: '',
    email: '',
    cpf: '',
    bloco: '',
    apartamento: '',
    valorApartamento: '',
    numeroVagaEstacionamento: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleInputChange = (inputName, value) => {
    setForm({ ...form, [inputName]: value });
  };

  const handleRegister = async () => {
    if (form.senha !== form.confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/morador", form);
      console.log("Resposta da API:", response.data);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
     
    } catch (error) {
      console.error("Erro no post:", error);
      Alert.alert('Erro', 'Não foi possível registrar. Tente novamente mais tarde.');
    }
  };

  const handleGoBack = () => {
    // Implemente a lógica para voltar aqui

  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={CadastroStyle.container}
    >
      <ScrollView contentContainerStyle={CadastroStyle.form}>
        <TextInput
          placeholder="Nome"
          value={form.nome}
          onChangeText={(value) => handleInputChange('nome', value)}
          style={CadastroStyle.input}
        />
        <TextInput
          placeholder="Data de Nascimento"
          value={form.dataNascimento}
          onChangeText={(value) => handleInputChange('dataNascimento', value)}
          style={CadastroStyle.input}
        />
        <TextInput
          placeholder="Sexo"
          value={form.sexo}
          onChangeText={(value) => handleInputChange('sexo', value)}
          style={CadastroStyle.input}
        />
        <TextInput
          placeholder="Email"
          value={form.email}
          onChangeText={(value) => handleInputChange('email', value)}
          style={CadastroStyle.input}
        />
        <TextInput
          placeholder="CPF"
          value={form.cpf}
          onChangeText={(value) => handleInputChange('cpf', value)}
          style={CadastroStyle.input}
        />
        <View style={CadastroStyle.inlineGroup}>
          <TextInput
            placeholder="Bloco"
            value={form.bloco}
            onChangeText={(value) => handleInputChange('bloco', value)}
            style={[CadastroStyle.input, CadastroStyle.inlineInput]}
          />
          <TextInput
            placeholder="Apto"
            value={form.apartamento}
            onChangeText={(value) => handleInputChange('apartamento', value)}
            style={[CadastroStyle.input, CadastroStyle.inlineInput]}
          />
        </View>
        <View style={CadastroStyle.inlineGroup}>
          <TextInput
            placeholder="Valor do Apto"
            value={form.valorApartamento}
            onChangeText={(value) => handleInputChange('valorApartamento', value)}
            style={[CadastroStyle.input, CadastroStyle.inlineInput]}
          />
          <TextInput
            placeholder="Número da Vaga"
            value={form.numeroVagaEstacionamento}
            onChangeText={(value) => handleInputChange('numeroVagaEstacionamento', value)}
            style={[CadastroStyle.input, CadastroStyle.inlineInput]}
          />
        </View>
        <TextInput
          placeholder="Senha"
          value={form.senha}
          onChangeText={(value) => handleInputChange('senha', value)}
          secureTextEntry
          style={CadastroStyle.input}
        />
        <TextInput
          placeholder="Confirmar Senha"
          value={form.confirmarSenha}
          onChangeText={(value) => handleInputChange('confirmarSenha', value)}
          secureTextEntry
          style={CadastroStyle.input}
        />
        <Button title="Cadastrar" onPress={handleRegister} />
        <Button title="Voltar" onPress={handleGoBack} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterResident;
