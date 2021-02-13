import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import { HomepageAndDetailsNavigator } from './navigations/MainNavigator'

export default function App () {
    return (
        <NavigationContainer>
          <HomepageAndDetailsNavigator/>
        </NavigationContainer>
    );
}