import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Image, Text, View } from 'react-native';
import { movieDetails } from '../services/calls'
import { Ionicons } from '@expo/vector-icons';

export default function Details (props) {
    const route  = props
    const [datas, setDatas] = useState([])
    
    useEffect(() => {
        movieDetails(route.route.params.id).then(data => {
            setDatas(data)
        })
    }, [])
    
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original${datas.backdrop_path}` }}
                    style={styles.imageBackground}
                />
                <View style={styles.movieContainer}>
                    <View style={styles.headerImage}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/original${datas.poster_path}` }}
                            style={styles.image}
                        />
                        <View style={styles.infoHeader}>
                            <Text style={styles.title}>{datas.original_title}</Text>
                            <Text style={styles.runtime}>{datas.runtime} minutes</Text>
                        </View>
                        <View style={styles.playButton}>
                        <Ionicons name="md-play-circle" size={40} color="#B00020" />
                        </View>
                    </View>
                    <View style={styles.containerOverview}>
                        <Text style={styles.synopsis}>Synopsis</Text>
                        <Text style={styles.overviewMovie}>{datas.overview}</Text>
                    </View>

                </View>
            </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: 380,
    resizeMode: 'cover',
  },
  movieContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 25,
    paddingRight: 25,
    zIndex: 1,
   },
   headerImage: {
    display: 'flex',
    flexDirection: 'row',
   },
   image: {
    borderColor: "#ffffff",
    borderRadius: 15,
    borderWidth: 4,
    height: 134,
    marginRight: 15,
    width: 84,
    top: -65,
  },
  infoHeader: {
    height: '60%',
    width: '55%',
    borderRadius: 15,
    backgroundColor: "#fff",
    padding: 10,
    top: -35,
  },
  playButton: {
    top: -22,
    marginLeft: 15,
  },
  containerOverview: {
    marginTop: -30
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#B5A90F',
    marginBottom: 15,
  },
  synopsis: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B5A90F',
    marginBottom: 40,
  },
  overviewMovie: {
    fontSize: 16,
    lineHeight: 24,
    color: '#B5A90F',
  },
});