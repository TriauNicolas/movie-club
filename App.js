import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Homepage from './screen/Homepage';
import Search from './screen/Search';
import {NavigationContainer} from "@react-navigation/native";

export default function App () {

    return (
      <View style={styles.container}>
        {/* <Homepage/> */}
        <Search></Search>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});