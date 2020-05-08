import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tags"
import Restaurants from "../Screen/Restaurants"

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (  
        <NavigationContainer>
            <Tab.Navigation>
                <Tab.Screen name="restaurants" components="Restaurants"/>
            </Tab.Navigation>
        </NavigationContainer>
    );
}
 
export default Navigation;
