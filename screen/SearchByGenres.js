import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, FlatList, SafeAreaView } from 'react-native';
import { searchGenreMovies } from '../services/calls'
import { FilmItem } from "../components/FilmItem";

export default function SearchByGenres (props) {
  const {route, navigation} = props
  const [datas, setDatas] = useState([])

  useEffect(() => {
    searchGenreMovies(route.params.id).then(data => {
      setDatas(data)
    })
  })

      return (
        <View style={styles.container}>
          <View style={styles.genreContainer}>
            <Text style={styles.nameGenre}>{route.params.name}</Text>
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
                    goToDetails={() => navigation.navigate('Details', {id: item.id})}
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
  genreContainer: {
    flex: 1,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#B00020'
  },
  nameGenre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B5A90F'
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