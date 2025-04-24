import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import EditarTarefa from './src/screens/EditTask';
import "./global.css"


const RootStack = createNativeStackNavigator({
  
  screenOptions: {
    headerShown: false
  },
  screens: {
    Home: Home,
    Edit: EditarTarefa,
  }
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation  />;
}