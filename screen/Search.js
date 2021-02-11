import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Image, Text, View, FlatList, SafeAreaView } from 'react-native';
import { searchMovie } from '../services/calls'
import { FilmItem } from "../components/FilmItem";

export default function Homepage () {
  const [datas, setDatas] = useState([])

  const handleTextChange = (value) => {
    searchMovie(value).then(data => {
      setDatas(data)
    })
  }

    console.log(datas)

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
              <Image
                source={require('../assets/search.svg')}
                style={styles.logoSearch}
              />
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
              <SafeAreaView>
                <FlatList
                  data={datas.results}
                  renderItem={({item}) => <FilmItem 
                    item={item}
                    goToDetails={() => console.log('it works to change screen')}
                  />}
                  keyExtractor={item => item.id.toString()}
                  style={styles.containerCards}
                />
              </SafeAreaView>
            }
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    maxHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 70,
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
    flex: 1,
    maxHeight: 150,
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B00020',
    borderRadius: 30,
  },
  logoSearch: {
    position: 'absolute',
    left: 45,
    width: 32,
    height: 32,
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
    flex: 4,
    marginTop: 25,
  },
});