import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // ✅ ADD THIS

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider> {/* ✅ WRAP EVERYTHING HERE */}
        <NavigationContainer>
          <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <AppNavigator />
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
