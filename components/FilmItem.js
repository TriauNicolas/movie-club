import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export const FilmItem = (props) => {
    const {item, goToDetails} = props
    
    return(
        <TouchableOpacity style={styles.cards} onPress={goToDetails}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
            style={styles.imageMovie}
          />
          <View
            style={styles.containerTextCards}>
            <Text 
                style={styles.titleCards}>
                { item.title }
            </Text>
            <Text 
                style={styles.textCards}>
                { item.release_date }
            </Text>
            <Text 
                style={styles.voteCards}>
                { item.vote_average }
            </Text>
          </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cards: {
        position: 'relative',
        height: 130,
        justifyContent: 'center',
        margin: 15,
        shadowColor: "#B00020",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.70,
        shadowRadius: 4.00,
        elevation: 5,
      },
      imageMovie: {
        position: 'absolute',
        height: '100%',
        width: 80,
      },
      containerTextCards: {
        marginLeft: 100,
      },
      titleCards: {
        fontSize: 15,
        color: '#B5A90F',
        fontWeight: 'bold',
        marginBottom: 10,
      },
      voteCards: {
        position: 'absolute',
        top: 15,
        right: 15,
        fontWeight: 'bold',
        color: '#B00020',
      },
})
