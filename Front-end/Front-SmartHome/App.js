import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { UtilsContext } from "./src/Contexts/Contex";
import { useState } from "react";
import Morador from "./src/Pages/Morador";



export default function App() {
  const [utils, setUtils] = useState({});

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
        <Stack.Navigator>
          <Stack.Screen name="Morador" component={Morador} />
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}