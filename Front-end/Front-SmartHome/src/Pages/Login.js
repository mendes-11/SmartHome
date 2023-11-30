import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CadastroStyle from "../Styles/CadastroStyles";
import axios from "axios";

const Login = (props) => {
  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState([]);


  async function conectLogin(cpf, senha) {
    if (cpf !== "" && senha !== "") {
      try {
        const response = await axios.get("http://localhost:8080/adm");
        const users = response.data;
        console.log(users);
        const foundUser = users.find(u => u.cpf === cpf && u.senha === senha);
  
        if (foundUser) {
          setUser(foundUser);
          console.log("Usuário encontrado");
          props.navigation.navigate("Home");
        } else {
          console.log("CPF ou senha incorretos.");
        }
      } catch (error) {
        console.error("Erro no login: ", error);
      }
    } else {
      console.log("CPF ou senha não inseridos.");
    }
  }

  function loginVerificado() {
    conectLogin(cpf, senha);
    console.log("User: ", user);
  }

  return (
    <View style={CadastroStyle.container}>
      <View style={CadastroStyle.form}>
        <Text style={CadastroStyle.title}>Login</Text>
        <TextInput
          style={CadastroStyle.input}
          value={cpf}
          onChangeText={setCPF}
          placeholder="CPF"
          autoCapitalize="none"
        />
        <TextInput
          style={CadastroStyle.input}
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          secureTextEntry
        />
        <TouchableOpacity
          style={CadastroStyle.botao}
          onPress={() => loginVerificado()}
        >
          <Text style={CadastroStyle.botaoLetra}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
