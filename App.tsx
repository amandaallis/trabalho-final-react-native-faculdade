/*eslint-disable*/
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/Login';
import Pagination from './pages/Pagination';
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
        <Stack.Screen name="Pagination" component={Pagination} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
