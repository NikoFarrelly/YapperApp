import {View, Text, SafeAreaView} from "react-native";
import React from "react";
import {darkTheme, theme} from "../theme";

export const Launch = () => {
    return (
        <SafeAreaView style={{backgroundColor: darkTheme.surfacePrimary, flex: 1}}>
            <View style={{flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 48, fontWeight:'bold', color: darkTheme.textPrimaryDark}}>Yapper</Text>
            </View>
        </SafeAreaView>
    )
}
