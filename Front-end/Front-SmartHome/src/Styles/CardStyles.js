import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({

  container: {
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    padding: 10,
    
  },
  card: {
    backgroundColor: '#fff', 
    borderRadius: 8, 
    padding: 15, 
    marginVertical: 8, 
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, 
  },
  titulo: {
    fontSize: 20, 
    fontWeight: 'bold',
  },
  textoCarregando: {
    textAlign: 'center', 
    marginTop: 20, 
  },
  item: {
    fontSize: 16, 
    color: '#333', 
  },
  botao: {
    height: 40,
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#2C68F5",
    borderRadius: 5,
    width: '40%',
  },
  botaoLetra: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: 'bold',
  },
  container: {
    marginTop: 10,
    display: "flex",
    flexDirection: "Row",
    flexDirection: 'column',
  },
  
});

export default CardStyle;