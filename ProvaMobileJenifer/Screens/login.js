import {View, TextInput, Button, StyleSheet} from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <TextInput
            style={{
            height: 40,
            }}
            placeholder="Email"
            />
            <TextInput
            style={{
            height: 40,
            }}
            placeholder="Senha"
            />
        </View>,
        <View style={styles.obotao}>
            <Button style={styles.botao}>
                
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
    botao: {
        
    }
});