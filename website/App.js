import { StyleSheet, Text, View } from 'react-native';
import { MyStack } from './components/stack';

export default function App() {
    console.log("start");
    return (
        <MyStack/>
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
