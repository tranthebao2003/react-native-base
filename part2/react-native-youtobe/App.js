import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import WebView from 'react-native-webview';



export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [status, setStatus] = useState(null)
  const [quality, setQuality] = useState(null)
  const [error, setError] = useState(null)
  return (
      <WebView
      javaScriptEnabled={true}
      domStorageEnabled={true}
      source={{uri: 'https://www.youtube.com/watch?v=mgCCLsN-Cyo' }}
      />
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
