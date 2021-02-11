import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, FlatList, SafeAreaView } from 'react-native';
import { category } from '../services/calls'

export default function Homepage () {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    category().then(data => {
      setDatas(data)
    })
  }, [])

      let renderItem = (item) => {
        return (
          <View>
            <View style={styles.cards}>
                <Text 
                style={styles.textCards}
                onPress={() => console.log('pute')}>
                { item.name }
                </Text>
            </View>
          </View>
        )
      }

      return (
        <View style={styles.container}>
          <StatusBar/>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/logo.jpg')}
              style={styles.image}
            />
          </View>
          <SafeAreaView style={styles.containerSafe}>
            <FlatList
              data={datas.genres}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
            />
          </SafeAreaView>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
    marginBottom: 55,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 120,
    borderColor: '#B00020',
    borderWidth: 10,
  },
  containerSafe: {
    flex: 1,
  },
  cards: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#B00020',
    margin: 17,
    shadowColor: "#B00020",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.90,
    shadowRadius: 4.00,
    elevation: 5,
  },
  textCards: {
    color: '#B00020',
    fontWeight: 'bold',
  }
});