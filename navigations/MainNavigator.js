import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Details from "../screen/Details";
import SearchByGenres from "../screen/SearchByGenres";
import BottomNavigator from "./BottomNavigator";

const Stack = createStackNavigator()

export const HomepageAndDetailsNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Homepage" component={BottomNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Details" component={Details}/>
            <Stack.Screen name="SearchByGenres" component={SearchByGenres}/>
        </Stack.Navigator>
    )
}