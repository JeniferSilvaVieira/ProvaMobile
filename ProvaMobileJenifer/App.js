import { StyleSheet, Text, View } from 'react-native';

import Login from './Screens/login';
import Estoque from './Screens/estoque';

export default function App() {
  return (
    Login, Estoque
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  }
});
