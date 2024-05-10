import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './app/Routes';
import { Provider } from 'react-redux'
import {store, persistor} from './app/redux/store'
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={Routes.Home.Name}
                        component={Routes.Home.Screen}
                        options={{headerShown: false, animation: 'fade'}}
                    />
                    <Stack.Screen
                        name={Routes.Game.Name}
                        component={Routes.Game.Screen}
                        options={{headerShown: false, animation: 'fade'}}
                    />
                    <Stack.Screen
                        name={Routes.Settings.Name}
                        component={Routes.Settings.Screen}
                        options={{headerShown: false, animation: 'fade'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PersistGate>
    </Provider>
  );
}

export default App;
