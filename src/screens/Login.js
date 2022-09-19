import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import Lottie from 'lottie-react-native';

import { moderateScale } from 'react-native-size-matters';

export default function Login({ navigation }) {
    return (
        <LinearGradient
            colors={['#2C5364', '#203A43', '#0F2027']}
            style={styles.container}>

            <Lottie
                style={styles.anime}
                source={require('../../assets/animation/robotHello.json')}
                autoPlay loop />

            <TouchableOpacity
                style={styles.btnNext}
                onPress={() => navigation.navigate('Home')} >
                <Text style={{ color: 'black' }}>Avançar</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.credits}>
                    Desenvolvido por Leandro Carlos
                </Text>

            </View>

        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    anime: {
        width: moderateScale(300),
        height: moderateScale(300),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnNext: {
        height: moderateScale(40),
        width: '90%',
        marginTop: moderateScale(50),
        borderRadius: moderateScale(10),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        position: 'absolute',
        bottom: 15,
    },
    credits: {
        color: 'white'
    }
})