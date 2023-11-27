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
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState(""); 
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [bloco, setBloco] = useState("");
  const [apartamento, setApartamento] = useState(""); 
  const [valorApartamento, setValorApartamento] = useState(""); 
  const [numeroVagaEstacionamento, setNumeroVagaEstacionamento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState(""); 

  const enviarDados = async () => {
  
    const dataFormatada = dataNascimento.split('/').reverse().join('-'); 
    const blocoNumerico = Number(bloco);
    const apartamentoNumerico = Number(apartamento);
    const valorApartamentoNumerico = Number(valorApartamento);

    try {
      const response = await axios.post("http://localhost:8080/morador", {
        nome,
        dataNascimento: dataFormatada,
        sexo,
        email,
        cpf,
        bloco: blocoNumerico,
        apartamento: apartamentoNumerico,
        valorApartamento: valorApartamentoNumerico,
        numeroVagaEstacionamento,
        senha
      });
    }
       catch (error) {
      console.error("Erro no post:", error);
      Alert.alert('Erro', 'Não foi possível registrar. Tente novamente mais tarde.');
    }
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={CadastroStyle.container}
    >
    <ScrollView contentContainerStyle={CadastroStyle.form}>
  <TextInput
    placeholder="Nome"
    value={nome} 
    onChangeText={(e) => setNome(e)}
    style={CadastroStyle.input}
  />
  <TextInput
    placeholder="Data de Nascimento"
    value={dataNascimento} 
    onChangeText={(e) => setDataNascimento(e)}
    style={CadastroStyle.input}
  />
  <TextInput
    placeholder="Sexo"
    value={sexo} 
    onChangeText={(e) => setSexo(e)}
    style={CadastroStyle.input}
  />
  <TextInput
    placeholder="Email"
    value={email} 
    onChangeText={(e) => setEmail(e)}
    style={CadastroStyle.input}
  />
  <TextInput
    placeholder="CPF"
    value={cpf} 
    onChangeText={(e) => setCPF(e)}
    style={CadastroStyle.input}
  />
  <View style={CadastroStyle.inlineGroup}>
    <TextInput
      placeholder="Bloco"
      value={bloco} 
      onChangeText={(e) => setBloco(e)}
      style={[CadastroStyle.input, CadastroStyle.inlineInput]}
    />
    <TextInput
      placeholder="Apto"
      value={apartamento} 
      onChangeText={(e) => setApartamento(e)}
      style={[CadastroStyle.input, CadastroStyle.inlineInput]}
    />
  </View>
  <View style={CadastroStyle.inlineGroup}>
    <TextInput
      placeholder="Valor do Apto"
      value={valorApartamento} 
      onChangeText={(e) => setValorApartamento(e)}
      style={[CadastroStyle.input, CadastroStyle.inlineInput]}
    />
    <TextInput
      placeholder="Número da Vaga"
      value={numeroVagaEstacionamento} 
      onChangeText={(e) => setNumeroVagaEstacionamento(e)}
      style={[CadastroStyle.input, CadastroStyle.inlineInput]}
    />
  </View>
  <TextInput
    placeholder="Senha"
    value={senha} 
    onChangeText={(e) => setSenha(e)}
    secureTextEntry
    style={CadastroStyle.input}
  />
  <TextInput
    placeholder="Confirmar Senha"
    value={confirmarSenha} 
    onChangeText={(e) => setConfirmarSenha(e)}
    secureTextEntry
    style={CadastroStyle.input}
  />
  <Button title="Cadastrar" onPress={enviarDados} />
  <Button title="Voltar" onPress={() => props.navigation.navigate("Visita")} />
</ScrollView>

    </KeyboardAvoidingView>
  );
};

export default RegisterResident;
