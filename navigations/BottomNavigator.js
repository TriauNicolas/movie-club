import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import Search from "../screen/Search";
import Homepage from "../screen/Homepage";

const TabNavigator = createBottomTabNavigator();

function CustomBar ({state, descriptors, navigation}) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }

    return (
        <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          let iconName;
          let iconColor;
          let iconSize;
  
          if (route.name === 'Homepage') {
            iconName = "home"
            iconColor= isFocused? '#B5A90F': 'black';
            iconSize = 25
          } else if (route.name === 'Search') {
            iconName = "search";
            iconColor= isFocused ? '#B5A90F' : 'black';
            iconSize = 20
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            })

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }

            return (
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  key={index}
                  onPress={onPress}
                  style={{ flex: 1, justifyContent: "center", alignItems: "center", height:50, borderTopColor: isFocused ? '#B5A90F' : '#B00020', borderTopWidth:5, backgroundColor:"#B00020" }}
                >
                    <FontAwesome name={iconName} size={iconSize} color={iconColor} />
                </TouchableOpacity>
              )
            })}
        </View>
    )
}

export default function MainBottomNavigator () {
    return (
        <TabNavigator.Navigator tabBar={props => <CustomBar {...props} />}>
            <TabNavigator.Screen name="Homepage" component={Homepage} />
            <TabNavigator.Screen name="Search" component={Search} />
        </TabNavigator.Navigator>
    )
}