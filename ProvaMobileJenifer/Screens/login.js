import {View, TextInput, Text, Button, StyleSheet} from 'react-native';

export default function Login() {
    return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Login</Text>
                <TextInput
                style={{
                height: 40,
                width: 200,
                backgroundColor:'pink',
                }}
                placeholder="Email"
                />
                <TextInput
                style={{
                height: 40,
                width: 200,
                backgroundColor:'pink',
                }}
                placeholder="Senha"
                />
                <Button style={styles.botao}>
                    placeholder="Press me"
                </Button>
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white',
        gap: 15
      },
    botao: {
        height:10,
        width:80,
        backgroundColor:'purple'
    },
    titulo: {
        fontSize:26
    }
});