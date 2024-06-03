import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import i18next from 'i18next';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './app/Routes';
import { persistor, store } from './app/redux/store';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

    const stackScreenOptions: NativeStackNavigationOptions = {
        headerShown: false,
        animation: 'fade'
    }

    const loadSettings = (): void => {
        i18next.changeLanguage(store.getState().playerSettings.gameLanguage)
    }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} onBeforeLift={loadSettings}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name={Routes.Home.Name}
                            component={Routes.Home.Screen}
                            options={stackScreenOptions}
                        />
                        <Stack.Screen
                            name={Routes.Game.Name}
                            component={Routes.Game.Screen}
                            options={stackScreenOptions}
                        />
                        <Stack.Screen
                            name={Routes.Settings.Name}
                            component={Routes.Settings.Screen}
                            options={stackScreenOptions}
                        />
                        <Stack.Screen
                            name={Routes.Ranking.Name}
                            component={Routes.Ranking.Screen}
                            options={stackScreenOptions}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
