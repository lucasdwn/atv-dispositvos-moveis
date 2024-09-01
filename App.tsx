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
import { RootStackParamList } from './types';
import Home from './screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Um'
      >
        {/* <Drawer.Screen
          name="Home" component={Home}
          options={{ title: 'Início' }} /> */}
        <Drawer.Screen
          name="Um" component={Um}
          options={{ title: 'Exercicio 1' }} />
        <Drawer.Screen
          name="Dois" component={Dois}
          options={{ title: 'Exercicio 2' }} />
        <Drawer.Screen
          name="Tres" component={Tres}
          options={{ title: 'Exercicio 3' }} />
        <Drawer.Screen
          name="Quatro" component={Quatro}
          options={{ title: 'Exercicio 4' }} />
        <Drawer.Screen
          name="Cinco" component={Cinco}
          options={{ title: 'Exercicio 5' }} />
        <Drawer.Screen
          name="Seis" component={Seis}
          options={{ title: 'Exercicio 6' }} />
        <Drawer.Screen
          name="Sete" component={Sete}
          options={{ title: 'Exercicio 7' }} />
        <Drawer.Screen
          name="Oito" component={Oito}
          options={{ title: 'Exercicio 8' }} />
        <Drawer.Screen
          name="Nove" component={Nove}
          options={{ title: 'Exercicio 9' }} />
        <Drawer.Screen
          name="Dez" component={Dez}
          options={{ title: 'Exercicio 10' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

