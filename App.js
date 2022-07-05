import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import History from './src/pages/History';
import Search from './src/pages/Search';
import Detail from './src/pages/Detail';
import Favorites from './src/pages/Favorites';
import TabBar from './src/components/TapBar';
import UseProvider from './src/context/Provider';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const SearchStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Arama"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detay" component={Detail} />
      </Stack.Navigator>
    );
  };

  return (
    <UseProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => <TabBar {...props} />}
          initialRouteName="Search">
          <Tab.Screen name="History" component={History} />
          <Tab.Screen
            name="Search"
            component={SearchStack}
            options={{headerShown: false}}
          />
          <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
      </NavigationContainer>
    </UseProvider>
  );
};

export default App;
