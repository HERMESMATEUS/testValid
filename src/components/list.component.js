import React from 'react';
import { Text, View, TouchableOpacity, Linking, FlatList, StyleSheet } from 'react-native';
import { HeightDP, WidthDP, FontSizeRP } from '@functions/calculateSize'

const Option = ({ data, onClick }) => {
    return <View style={styles.containOption} onClick={() => onClick(data)}>
        <View style={styles.section}>
            <Text>Artista:{"\n"}{data.name}</Text>
        </View>
        <View style={styles.section}>
            <TouchableOpacity onPress={() => Linking.openURL(data.url)}><Text style={{ color: '#2D8ADA', textDecorationLine: 'underline' }}>Escuchar cancion</Text></TouchableOpacity>
        </View>
        <View style={styles.section}>
            <TouchableOpacity style={styles.button} onPress={() => onClick(data)}><Text style={{ color: 'white' }}>Detalle</Text></TouchableOpacity>
        </View>
    </View>
}

const ListComponent = ({ data, onClick, header }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.title}>Ciudad : {header.country}</Text>
            <FlatList
                style={{ flex: 1 }}
                renderItem={({ item }) => <Option data={item} onClick={onClick} />}
                data={data}
                keyExtractor={item => item.url}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: FontSizeRP(24),
        height: HeightDP(40),
        marginTop: (20),
        fontWeight: 'bold'
    },
    containOption: {
        width: WidthDP(320),
        backgroundColor: '#d3d3d3',
        borderRadius: HeightDP(10),
        paddingHorizontal: WidthDP(10),
        paddingVertical: HeightDP(5),
        marginBottom: HeightDP(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: HeightDP(60)
    },
    section: {
        flex: 1,
        margin: HeightDP(5),
        justifyContent: 'center',
        alignItems: 'center'
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

export default ListComponent
