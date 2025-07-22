import React from "react";
import {Stack} from "expo-router";

const RootLayout = () => {
    const isLoggedIn = false;

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={isLoggedIn}>
            </Stack.Protected>

            <Stack.Protected guard={!isLoggedIn}>
                <Stack.Screen name="index"/>
                <Stack.Screen name="login"/>
                <Stack.Screen name="register"/>
            </Stack.Protected>
        </Stack>
    )
}

export default RootLayout;
