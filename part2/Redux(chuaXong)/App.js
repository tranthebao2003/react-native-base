import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import RootComponent from './src/view/index'


export default function App() {
  return (
     <RootComponent></RootComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
