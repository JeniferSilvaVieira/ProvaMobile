import {View, TextInput, Image, StyleSheet} from 'react-native';

export default function TalkToUs() {
    return (
        <View style={styles.container}>
            <View style={styles.imagem}>
                <Image
                    source={{
                        uri: 'https://www.scuadra.com.br/blog/wp-content/uploads/2019/03/female-baker-holding-baked-fresh-macaroons-pastries-tray-810x565.jpg?x97018',
                    }}
                />,
            </View>
            <View>
            <TextInput
                style={{
                height: 40,
                width: 200,
                backgroundColor:'pink',
                marginTop: 20
                }}
                placeholder="Nome"
            />
            <TextInput
                style={{
                height: 40,
                width: 200,
                backgroundColor:'pink',
                marginTop: 20
                }}
                placeholder="Email"
            />
            <TextInput
                style={{
                height: 40,
                width: 200,
                backgroundColor:'pink',
                marginTop: 20
                }}
                placeholder="Mensagem"
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'white',
      alignItems:'center',
    },
    imagem: {
        width: 200,
        height: 200,
    }
});