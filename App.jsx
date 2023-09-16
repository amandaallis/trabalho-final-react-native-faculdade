/eslint-disable/
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/Login';
import Pagination from './pages/Pagination';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './pages/About';
import Episodes from './pages/Episodes';

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
        <Stack.Screen name="Pagination" component={Pagination} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Episodes" component={Episodes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;