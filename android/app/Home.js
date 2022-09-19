import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, Pressable, ScrollView, RefreshControl } from 'react-native'
import { Plus } from 'phosphor-react-native';

// Component

import carLogo from '../../assets/images/carLogo.png'
import api from '../utils/api'

// Library
import LinearGradient from 'react-native-linear-gradient'
import CardList from '../Components/CardList';
import { moderateScale } from 'react-native-size-matters';

export default function Home({ navigation }) {

    const [listCar, setListCar] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false)

    const onRefresh = async () => {
        consultaLista()
    };

    const consultaLista = () => {
        setLoading(true)
        api.get()
            .then((res) =>
                setListCar(res.data))
            .catch((err) => console.log(err))
            .finally(setLoading(false))
    }

    useEffect(
        () => {
            consultaLista()
        }, [listCar]
    )

    return (
        <LinearGradient
            colors={['#2C5364', '#203A43', '#0F2027']}
            style={styles.container}>

            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.header}>

                    <View>
                        <Text style={styles.title}>LOJA DE CARROS</Text>
                        <Image style={styles.imgLogo} source={carLogo} />
                    </View>

                    <Pressable
                        style={styles.btnAddNewCar}
                        onPress={() => navigation.navigate('AddNewCar')} >
                        <Plus size={32} />
                    </Pressable>

                </View>

                {
                    loading
                        ? <ActivityIndicator />
                        : (
                            <FlatList
                                data={listCar}
                                keyExtractor={(item, index) => String(index)}
                                renderItem={(item, index) => (
                                    <Pressable
                                        onPress={() => { navigation.navigate('CarDetails', { item: item }) }}>
                                        <CardList item={item} />
                                    </Pressable>
                                )} />)}

            </ScrollView>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
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
    btnAddNewCar: {
        position: 'absolute',
        right: moderateScale(15)
    }
})