import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { UtilsContext } from "./src/Contexts/Contex";
import { useState } from "react";
import Morador from "./src/Pages/Morador";
import Visita from "./src/Pages/Visita";
import Funcionario from "./src/Pages/Funcionario";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";
import Adm from "./src/Pages/Adm";






export default function App() {
  const [utils, setUtils] = useState({});

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
        <Stack.Navigator>
          <Stack.Screen name="Adm" component={Adm}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Morador" component={Morador}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Visita" component={Visita}/>
          <Stack.Screen name="Funcionario" component={Funcionario}/>
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}