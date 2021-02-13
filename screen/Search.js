import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Image, Text, View, FlatList, ScrollView } from 'react-native'
import { searchMovie } from '../services/calls'
import { FilmItem } from "../components/FilmItem"
import { Octicons } from '@expo/vector-icons'; 

export default function Search ({ navigation }) {
  const [datas, setDatas] = useState([])

  const handleTextChange = (value) => {
    searchMovie(value).then(data => {
      setDatas(data)
    })
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
            <View style={styles.textInputContainer}>
            <Octicons name="search" style={styles.logoSearch} size={32} color="black" />
              <TextInput
                style={styles.inputText}
                placeholder="Cherchez un film !"
                placeholderTextColor="#B00020"
                onChangeText={value => handleTextChange(value)}
                clearTextOnFocus="true"
              >
              </TextInput>
          </View>

          {datas.length === 0 || datas.errors ?
            <View style={styles.badLogoContainer}>
              <Image
                source={require('../assets/bad.png')}
                style={styles.badLogo}
              />
              <Text style={styles.textNoSearch}>
                Aucune recherche effectuée
              </Text>
            </View>
            : 
              <ScrollView>
                <FlatList
                  data={datas.results}
                  renderItem={({item}) => <FilmItem 
                    item={item}
                    goToDetails={() => navigation.navigate('Details', {id: item.id})}
                  />}
                  keyExtractor={item => item.id.toString()}
                  style={styles.containerCards}
                />
              </ScrollView>
            }
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    maxHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 120,
    borderColor: '#B00020',
    borderWidth: 10,
  },
  textInputContainer: {
    position: 'relative',
    minHeight: 150,
    maxHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B00020',
    borderRadius: 30,
  },
  logoSearch: {
    position: 'absolute',
    left: 45,
  },
  inputText: {
    borderWidth: 1,
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    paddingLeft: 50,
    borderWidth: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },
  badLogoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badLogo: {
    width: 128,
    height: 128,
    marginBottom: 40,
  },
  textNoSearch: {
    width: 160,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B5A90F',
    textAlign: 'center'
  },
  containerCards: {
    flex: 3,
    marginTop: 25,
  },
});