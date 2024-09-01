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
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ViaCep from './screens/ViaCep/Index';
import { CepProvider } from './contexts/CepContext';
import ListCeps from './screens/ListCeps';
const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <CepProvider>

      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Um'
          screenOptions={({ route }) => ({
            drawerIcon: ({ color, size }) => {
              let iconName: string;
              switch (route.name) {
                case "Um":
                  iconName = "globe-outline";
                  break;
                case "Dois":
                  iconName = "attach-outline";
                  break;
                case "Tres":
                  iconName = "car-outline";
                  break;
                case "Quatro":
                  iconName = "checkmark-circle-outline";
                  break;
                case "Cinco":
                  iconName = "image-outline";
                  break;
                case "Seis":
                  iconName = "laptop-outline";
                  break;
                case "Sete":
                  iconName = "man-outline";
                  break;
                case "Oito":
                  iconName = "phone-portrait-outline";
                  break;
                case "Nove":
                  iconName = "save-outline";
                  break;
                case "Dez":
                  iconName = "moon-outline";
                  break;
                case "ViaCep":
                  iconName = "locate"
                  break;
                case "ListCeps":
                  iconName = "list"
                  break;
                default:
                  iconName = "alert-circle-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          {/* <Drawer.Screen
          name="Home" component={Home}
          options={{ title: 'Início' }} /> */}
          {/* <Drawer.Screen
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
          options={{ title: 'Exercicio 10' }} /> */}
          <Drawer.Screen
            name="ViaCep" component={ViaCep}
            options={{ title: 'ViaCEP' }} />
          <Drawer.Screen
            name="ListCeps" component={ListCeps}
            options={{ title: 'Consultas de CEP' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CepProvider>
  )
}

