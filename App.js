import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReadPartners from './components/ReadPartners';
import authentificate from './components/authentificate'
import SignIn from './components/SignIn';
export default function App() {
  return (
    < SignIn/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
