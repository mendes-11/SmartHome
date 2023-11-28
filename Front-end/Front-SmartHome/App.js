import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { UtilsContext } from "./src/Contexts/Contex";
import { useState } from "react";
import Morador from "./src/Pages/Morador";
import Visita from "./src/Pages/Visita";
import Funcionario from "./src/Pages/Funcionario";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";






export default function App() {
  const [utils, setUtils] = useState({});

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Funcionario" component={Funcionario}/>
          <Stack.Screen name="Visita" component={Visita}/>
          <Stack.Screen name="Morador" component={Morador}/>
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}