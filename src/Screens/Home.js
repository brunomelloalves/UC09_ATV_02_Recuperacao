import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

import Novidades from '../Components/Novidades'
import Tenis from '../Components/Tenis'

export default function Home () {
  const novidades = [
    {
      id: 1,
      nome: 'Adidas',
      imagem:
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/be9f44fc5d78448dbe6bab4900c15c29_9366/Tenis_Grand_Court_SE_Preto_FW6690.jpg',
    },
    {
      id: 2,
      nome: 'Oldsen Jaguar',
      imagem:
        'https://static.netshoes.com.br/produtos/tenis-masculino-oldsen-jaguar-corrida-academia-caminhada-treino-fitness/60/NGX-0127-060/NGX-0127-060_zoom1.jpg?ts=1621605732&ims=544x',
    },
  ]

  const promocoes = [
    {
      id: 1,
      nome: 'Adidas',
      preco: 'R$ 320,00',
      imagem:
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/be9f44fc5d78448dbe6bab4900c15c29_9366/Tenis_Grand_Court_SE_Preto_FW6690.jpg',
    },
    {
      id: 2,
      nome: 'All Star',
      preco: 'R$ 220,00',
      imagem:
        'https://sapatinhodeluxo.vteximg.com.br/arquivos/ids/177446-620-620/8020.01_1-Tenis-Lona-Preto-Vulcanizado-Flat-0.jpg?v=637756853198930000',
    },
    {
      id: 3,
      nome: 'Nike - Zoom',
      preco: 'R$ 400,00',
      imagem: 'https://cf.shopee.com.br/file/f9042069744652744b82ca68a24a2f91',
    },
  ]

  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <Image source={require('../Image/header2.png')} />
      </View>
      <Text style={style.titulo}>Novidades</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={novidades}
          renderItem={({item}) => Novidades({item})}
          key={item => item.id}
          horizontal={true}
        />
      </View>
      <View style={style.header}>
        <Image source={require('../Image/promocoes.png')} />
      </View>

      <View style={{flex: 1, marginBottom: 15}}>

        <FlatList
          data={promocoes}
          renderItem={({item}) => Tenis ({item})}
          key={item => item.id}
          horizontal={true}
        />
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
})
