import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import axios from "axios";
import CadastroStyle from "../Styles/CadastroStyles";

const RegisterVisit = (props) => {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [turno, setTurno] = useState("");
  const [funcao, setFuncao] = useState("");

  const enviarDados = async () => {
    const dataFormatada = dataNascimento.split("/").reverse().join("-");

    try {
      const response = await axios.post("http://localhost:8080/funcionario", {
        nome,
        dataNascimento: dataFormatada,
        sexo,
        email,
        cpf,
        turno,
        funcao,
      });
    } catch (error) {
      console.error("Erro no post:", error);
      Alert.alert(
        "Erro",
        "Não foi possível registrar. Tente novamente mais tarde."
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
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
            placeholder="Turno"
            value={turno}
            onChangeText={(e) => setTurno(e)}
            style={[CadastroStyle.input, CadastroStyle.inlineInput]}
          />
          <TextInput
            placeholder="Função"
            value={funcao}
            onChangeText={(e) => setFuncao(e)}
            style={[CadastroStyle.input, CadastroStyle.inlineInput]}
          />
        </View>

        <TouchableOpacity style={CadastroStyle.botao} onPress={enviarDados}>
          <Text style={CadastroStyle.botaoLetra}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={CadastroStyle.botao} onPress={enviarDados}>
          <Text
            style={CadastroStyle.botaoLetra}
            onPress={() => props.navigation.navigate("Home")}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterVisit;
