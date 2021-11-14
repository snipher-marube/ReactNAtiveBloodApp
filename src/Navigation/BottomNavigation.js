import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from "../Screens/SearchScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import DonationRequestScreen from "../Screens/DonationRequestScreen";
import {Icon, Badge} from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import colorValue from "../Shared/commoStyle/ColorValue";
import Fontisto from "react-native-vector-icons/Fontisto";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
           screenOptions={{
               tabBarActiveTintColor: colorValue.primary
           }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => <Icon name='home' size={size} color={color}/>,
                    title:'',
                    headerLeft: () => (<View>
                        <Image
                            style={{width:25, height:25, resizeMode:'contain'}}
                            source={require('../../assests/images/menu.png')}/>
                    </View>),
                    headerRight: () => (<View style={{marginHorizontal:5}}>
                        <View>
                            <Badge status='error' value={10}/>
                        </View>
                        <Fontisto name='bell' size={24}/>
                    </View>)
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({color}) => <Icon name='search' size={24} color={color}/>,
                    title:''
                }}
            />
            <Tab.Screen
                name="DonationRequestScreen"
                component={DonationRequestScreen}
                options={{
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name='blood-bag' size={24} color={color}/>,
                    title:''
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({color}) => <Entypo name='user' size={24} color={color}/>,
                    title:''
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;

const styles = StyleSheet.create({

})