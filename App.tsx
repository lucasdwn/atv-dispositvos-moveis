import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Um from './screens/Um';
import Cinco from './screens/Cinco';
import Quatro from './screens/Quatro';
import Tres from './screens/Tres';
import Dois from './screens/Dois';
import Seis from './screens/Seis';
import Sete from './screens/Sete';
import Oito from './screens/Oito';
import Nove from './screens/Nove';
import Dez from './screens/Dez';
import Onze from './screens/Onze';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import Doze from './screens/Home';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home" component={Doze}
        options={{title: 'Início'}} /> 
        <Stack.Screen
        name="Um" component={Um}
        options={{title: 'Exercicio 1'}} /> 
        <Stack.Screen
        name="Dois" component={Dois}
        options={{title: 'Exercicio 2'}} /> 
        <Stack.Screen
        name="Tres" component={Tres}
        options={{title: 'Exercicio 3'}} /> 
        <Stack.Screen
        name="Quatro" component={Quatro}
        options={{title: 'Exercicio 4'}} /> 
        <Stack.Screen
        name="Cinco" component={Cinco}
        options={{title: 'Exercicio 5'}} /> 
        <Stack.Screen
        name="Seis" component={Seis}
        options={{title: 'Exercicio 6'}} /> 
        <Stack.Screen
        name="Sete" component={Sete}
        options={{title: 'Exercicio 7'}} /> 
        <Stack.Screen
        name="Oito" component={Oito}
        options={{title: 'Exercicio 8'}} /> 
        <Stack.Screen
        name="Nove" component={Nove}
        options={{title: 'Exercicio 9'}} /> 
        <Stack.Screen
        name="Dez" component={Dez}
        options={{title: 'Exercicio 10'}} /> 
        <Stack.Screen
        name="Onze" component={Onze}
        options={{title: 'Exercicio 11'}} /> 

      </Stack.Navigator>
    </NavigationContainer>
  )
}

