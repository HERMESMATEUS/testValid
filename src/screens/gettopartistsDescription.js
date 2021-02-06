import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import ContainComponent from '@components/contain.component';
import { HeightDP, WidthDP, FontSizeRP } from '@functions/calculateSize'

const GettopartistsDescription = ({ navigation, route }) => {
    return (
        <ContainComponent>
            <View style={styles.contain}>
                <Text>Nombre :{route.params.name} </Text>
                <Text>Reproducidos: {route.params.listeners} </Text>
                <Text onPress={() => Linking.openURL(route.params.url)} style={{ color: '#2D8ADA', textDecorationLine: 'underline' }}>Escuchar cancion</Text>
                <Text onPress={() => Linking.openURL(route.params.streamable)} style={{ color: '#2D8ADA', textDecorationLine: 'underline' }}>Streamer</Text>
                {route.params.image.map((item) => <Image source={item["#text"]} />)}
            </View>
        </ContainComponent>
    )
}

const styles = StyleSheet.create({

    contain: {
        width: WidthDP(320),
        marginVertical: HeightDP(20),
        marginHorizontal: WidthDP(20),
        backgroundColor: '#D3D3D3',
        borderRadius: HeightDP(10),
        paddingHorizontal: WidthDP(10),
        paddingVertical: HeightDP(20),
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: HeightDP(30),
        borderRadius: HeightDP(5),
        width: WidthDP(60),
        backgroundColor: '#52645F',
    }
})

export default GettopartistsDescription;