import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../screens/home';
import { Contact } from '../screens/contact';

const Stack = createNativeStackNavigator();

const ops = {
    headerStyle: {backgroundColor: '#171515'},
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontSize: 25,
        color: '#f0f'
    },
    headerTintColor: '#1e90ff'
}

export function MyStack() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={ops}
                    initialRouteName='home'>
                    <Stack.Screen
                        name='home'
                        component={Home}
                        options={{
                            title: 'Caleb\'s Home Page'
                        }}>
                    </Stack.Screen>
                    <Stack.Screen
                        name='contact'
                        component={Contact}
                        options={{
                            title: 'Contact Caleb'
                        }}>
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}