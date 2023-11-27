import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
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
    marginBottom: 10, 
  },
  textoCarregando: {
    textAlign: 'center', 
    marginTop: 20, 
  },
  item: {
    fontSize: 16, 
    color: '#333', 
  }
  
});

export default CardStyle;