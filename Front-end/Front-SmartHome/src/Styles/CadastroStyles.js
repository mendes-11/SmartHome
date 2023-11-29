import { StyleSheet } from "react-native";

const CadastroStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 20,
    justifyContent: "center",
    alignItems: "stretch",
  },
  input: {
    borderWidth: 1,
    borderColor: "#2C68F5",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  botao: {
    height: 40,
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#2C68F5",
    borderRadius: 5,
    width: "100%",
    marginTop: 10,
  },

  botaoLetra: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  title:{
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 30,
  },
});

export default CadastroStyle;