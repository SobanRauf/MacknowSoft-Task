import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RoutesList from './router-list';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        {RoutesList.map((route, index) => {
          return (
            <Stack.Screen
              key={index}
              name={route.name}
              component={route.component}
              options={route.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}