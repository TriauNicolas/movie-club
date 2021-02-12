import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Homepage from './screen/Homepage';
import Search from './screen/Search';
import Details from './screen/Details';
import {NavigationContainer} from "@react-navigation/native";

export default function App () {

    return (
      <View style={styles.container}>
        {/* <Homepage/> */}
        {/* <Search/> */}
        {/* <Details/> */}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});