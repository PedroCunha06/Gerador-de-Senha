import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes';
import { PasswordProvider } from './src/pages/config/passwordGenerate';
import { Authentication } from './src/pages/authen/index';

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function openApp() {
        if (isAuthenticated) {
            return (
                <PasswordProvider>
                    <NavigationContainer>
                        <Routes></Routes>
                    </NavigationContainer>
                </PasswordProvider>
            );
        } else {
            return (
                <PasswordProvider>
                    <Authentication successAuthentication={handleAuthentication} />
                </PasswordProvider>
            );
        }
    }

    async function handleAuthentication() {
        setIsAuthenticated(true);
    }

    useEffect(() => {
        openApp();
    }, [isAuthenticated]);

    return openApp()
}