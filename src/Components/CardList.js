import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


// Library 

import { moderateScale } from 'react-native-size-matters';

export default function CardList({ item }) {

    // Recebem o item da flat list da tela anterior e fazemos a renderização da lista item a item.

    return (
        <View
            style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 150 }}>
                <Text style={styles.model}>Marca: {item.item.title}</Text>

            </View>

            <View style={{ width: 275, marginLeft: 15, }}>
                <Text style={styles.modelYear}>Ano: {item.item.age}</Text>
                <Text style={styles.price}>Valor: R$ {item.item.price}</Text>
                <Text style={styles.brand}>Modelo: {item.item.brand}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#3c6a7d',
        marginVertical: moderateScale(10),
        padding: moderateScale(15),
        borderRadius: moderateScale(10),
        marginHorizontal: moderateScale(15),

        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    model: {
        color: 'white',
        fontSize: moderateScale(23)
    },
    modelYear: {
        fontSize: moderateScale(16),
        color: 'white',
    },
    price: {
        fontSize: moderateScale(16),
        color: '#AEAEB3',
    },
    brand: {
        fontSize: moderateScale(16),
        color: '#AEAEB3',
    }
})