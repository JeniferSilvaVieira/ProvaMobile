import {View, Text, Button, Image, StyleSheet, ScrollView} from 'react-native';
import { useState } from 'react';

export default function Estoque() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://www.mamacida.com.br/image/cache/data/produtos/bolos/chocorango/img-6068-fotor-2024060921345-650x650.jpg',
                }}
                style={{width: 150, height: 150}}
            />,
            <Text style={styles.titulo}>
                Bolo de chocolate com morango!
            </Text>,
            <Image
                source={{
                    uri: 'https://confeitariaiceland.com.br/wp-content/uploads/2024/06/BoloRedVelvet3.jpg',
                }}
                style={{width: 150, height: 150}}
            />,
            <Text style={styles.titulo}>
                Bolo red Velvet!
            </Text>,
            <Image
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVMX2WXI1spd6wnmx8FNCZmGMBhDmK16yA&s',
                }}
                style={{width: 150, height: 150}}
            />,
            <Text style={styles.titulo}>
                Bolo de chocolate branco com cereja!
            </Text>,
            <Image
                source={{
                    uri: 'https://i.pinimg.com/736x/c9/b4/e8/c9b4e8e2bc7bf98b40eb1afcd482b762.jpg',
                }}
                style={{width: 150, height: 150}}
            />,
            <Text style={styles.titulo}>
                Bolo sabor Tutti Frutti!
            </Text>,
            <Image
                source={{
                    uri: 'https://tuacasa.uol.com.br/wp-content/uploads/2020/03/bolos-decorados-00-1.jpg',
                }}
                style={{width: 150, height: 150}}
            />,
            <Text style={styles.titulo}>
                Bolo de limão!
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'white'
    },
    titulo: {
        fontSize:15
    }
});
  
