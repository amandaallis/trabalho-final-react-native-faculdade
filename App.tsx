/*eslint-disable*/
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/Login';
import Teste from './pages/Teste';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Página de Login'}}
        />
        <Stack.Screen name="Teste" component={Teste} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
