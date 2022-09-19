import axios from 'axios'
import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Pressable, Alert } from 'react-native'

// Library

import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-paper'
import { moderateScale } from 'react-native-size-matters';
import { ArrowLeft, Trash } from 'phosphor-react-native';

// Component

import carLogo from '../../assets/images/carLogo.png'
import api from '../utils/api'

export default function CarDetails({ route, navigation }) {

    const id = route.params?.item.item._id
    const [marca, setMarca] = useState(route.params?.item.item.title)
    const [modelo, setModelo] = useState(route.params?.item.item.brand)
    const [preco, setPreco] = useState(route.params?.item.item.price)
    const [ano, setAno] = useState(route.params?.item.item.age)

    const body = {
        title: marca,
        brand: modelo,
        price: preco,
        age: ano
    }

    function updateCar() {
        api.put(`${id}`, body)
            .then(res => {
                Alert.alert('Carro atualizado!')
                navigation.goBack()
            })
            .catch(err => {
                Alert.alert('Houve um erro com a sua solicitação')
                console.log('update car', err)
            })
    }

    function removeCar() {
        api.delete(`${id}`)
            .then(res => {
                Alert.alert('Excluído com sucesso!'),
                    navigation.goBack()
            })
            .catch(err => {
                Alert.alert('Houve um erro com a sua solicitação')
                console.log('removeCar', err)

            })
    }

    return (
        <LinearGradient
            colors={['#2C5364', '#203A43', '#0F2027']}
            style={styles.container}>

            <View style={styles.header}>

                <Pressable
                    style={{ position: 'absolute', left: moderateScale(15) }}
                    onPress={() => navigation.goBack()}>
                    <ArrowLeft size={24} color='white' />
                </Pressable>
                <Text style={styles.title}>ALTERAR/REMOVER VEÍCULO</Text>
                <Image style={styles.imgLogo} source={carLogo} />
            </View>
            <View style={styles.body}>
                <TextInput style={styles.input} label={'Marca: ' + marca} onChangeText={setMarca} />
                <TextInput style={styles.input} label={'Modelo: ' + modelo} onChangeText={setModelo} />
                <TextInput style={styles.input} label={'Ano do Veículo: ' + ano} keyboardType={'decimal-pad'} onChangeText={setAno} />
                <TextInput style={styles.input} label={'Valor do Veículo: ' + preco} keyboardType={'decimal-pad'} onChangeText={setPreco} />
            </View>

            <View style={styles.divButtons}>
                <TouchableOpacity
                    style={styles.btnRemove}
                    onPress={() => removeCar()} >
                    <Text style={styles.textRemove}>REMOVER</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => updateCar()}
                    style={styles.btnUpdate}>
                    <Text style={styles.textAtt}>ATUALIZAR</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderateScale(20)
    },
    title: {
        color: 'white',
        fontSize: moderateScale(20)
    },
    imgLogo: {
        width: moderateScale(200),
        height: moderateScale(50),
    },
    input: {
        marginHorizontal: moderateScale(15),
        marginVertical: moderateScale(5)
    },
    divButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: moderateScale(25)
    },
    btnRemove: {
        width: moderateScale(100),
        height: moderateScale(50),
        marginHorizontal: moderateScale(15),
        borderRadius: moderateScale(20),
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
    textRemove: {
        textAlign: 'center',
        justifyContent: 'center',
    },
    btnUpdate: {
        width: moderateScale(100),
        height: moderateScale(50),
        marginHorizontal: moderateScale(15),
        borderRadius: moderateScale(20),
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: 'center'
    },
    textAtt: {
        textAlign: 'center',
        justifyContent: 'center'
    }

})