import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native'

// Library

import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-paper'
import { moderateScale } from 'react-native-size-matters';
import { ArrowLeft } from 'phosphor-react-native';

// Components

import carLogo from '../../assets/images/carLogo.png'
import api from '../utils/api'

export default function AddNewCar({ navigation }) {

    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [preco, setPreco] = useState('')
    const [ano, setAno] = useState('')

    // Instanciando o body pra enviar um só dado de uma vez pra api pra as requisições 

    const body = {
        title: marca,
        brand: modelo,
        price: preco,
        age: ano
    }


    // Função pra adicionar um novo carro a lista, não passamos o caminho pq o caminho já ta na base do axios.
    function addCar() {

        api.post('', body)
            .then((res) => {
                navigation.goBack()
            })
            .catch((err) => console.log({ err }))
    }

    return (
        <LinearGradient
            colors={['#2C5364', '#203A43', '#0F2027']}
            style={styles.container}>

            <View style={styles.header}>

                <Pressable
                    style={{ position: 'absolute', left: moderateScale(15) }}
                    onPress={() => navigation.goBack()}>
                    <ArrowLeft size={24} color='white'/>
                </Pressable>
                <Text style={{ color: 'white', fontSize: moderateScale(20) }}>ADICIONE UM VEÍCULO</Text>
                <Image style={{ width: moderateScale(200), height: moderateScale(50), }} source={carLogo} />
            </View>

            <View style={styles.body}>
                <TextInput style={styles.input} label={'Marca'} onChangeText={setMarca} />
                <TextInput style={styles.input} label={'Modelo'} onChangeText={setModelo} />
                <TextInput style={styles.input} label={'Ano'} maxLength={4} keyboardType={'decimal-pad'} onChangeText={setPreco} />
                <TextInput style={styles.input} label={'Preço'} keyboardType={'decimal-pad'} onChangeText={setAno} />
            </View>

            <TouchableOpacity
                style={styles.btnAdd}
                onPress={() => addCar()}
                activeOpacity={0.5}>
                <Text style={{ textAlign: 'center', color: 'black' }}>ADICIONAR</Text>
            </TouchableOpacity>

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
    input: {
        marginHorizontal: moderateScale(15),
        marginVertical: moderateScale(5)
    },
    btnAdd: {
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        height: moderateScale(40),
        marginHorizontal: moderateScale(15),
        marginVertical: moderateScale(5)
    }
})