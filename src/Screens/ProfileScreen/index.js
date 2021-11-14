import React from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import { Avatar, ListItem, Icon  } from 'react-native-elements';
import colorValue from "../../Shared/commoStyle/ColorValue";
import {commonJustify, commonStyle} from "../../Shared/commoStyle/CommonStyle";
import fontValue from "../../Shared/commoStyle/FontValue";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ProfileScreen = () => {
    return (
        <ScrollView>
            <View>
                <View style={[commonJustify.rowCenter, {marginVertical:20}]}>
                    <Avatar
                        size={100}
                        rounded
                        icon={{ name: 'user', type: 'font-awesome' }}
                        containerStyle={{ backgroundColor: colorValue.primary }}
                    />
                </View>

                <View>
                    <Text style={[commonStyle({fontSize:25,
                        color:colorValue.liteDark3}).text, commonJustify.textCenter]}>Snipher Marube</Text>
                </View>

                
                <View style={[commonJustify.rowCenter, {marginVertical:10}]}>
                    <FontAwesome5 name='map-marked-alt' size={18} style={{marginRight:10}}/>
                    <Text style={[commonStyle({fontSize:15,
                        color:colorValue.liteDark3}).text, commonJustify.textCenter]}>South B, Nairobi</Text>
                </View>

                <View style={[commonJustify.rowSpaceEvenly, {marginVertical:20}]}>
                    <Button title='Call now' buttonStyle={{backgroundColor:colorValue.info}} />
                    <Button title='Request' buttonStyle={{backgroundColor:colorValue.primary}} />
                </View>

                <View style={commonJustify.rowSpaceEvenly}>

                    <View style={styles.card}>
                        <Text style={[commonStyle({
                            fontFamily: fontValue.PoppinsBold,
                            fontSize:24
                        }).text, {textAlign: 'center'}]}>A+</Text>
                        <Text style={[commonStyle({
                            fontFamily: fontValue.PoppinsRegular,
                            fontSize:14
                        }).text, {textAlign: 'center'}]}>Blood Type</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={[commonStyle({
                            fontFamily: fontValue.PoppinsBold,
                            fontSize:24
                        }).text, {textAlign: 'center'}]}>05</Text>
                        <Text style={[commonStyle({
                            fontFamily: fontValue.PoppinsRegular,
                            fontSize:14
                        }).text, {textAlign: 'center'}]}>Donated</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={[commonStyle({
                            fontFamily: fontValue.PoppinsBold,
                            fontSize:24
                        }).text, {textAlign: 'center'}]}>02</Text>
                        <Text style={[commonStyle({
                            fontFamily: fontValue.PoppinsRegular,
                            fontSize:14
                        }).text, {textAlign: 'center'}]}>Requested</Text>
                    </View>
                </View>

                <View style={{marginVertical:20}}>
                    {
                        list.map((item, i) => (
                            <ListItem containerStyle={{marginVertical:5, marginHorizontal:10}} key={i} bottomDivider>
                                <item.iconName color={colorValue.primary} name={item.icon} />
                                <ListItem.Content>
                                    <ListItem.Title>{item.title}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        ))
                    }
                </View>

            </View>
        </ScrollView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    card: {
        backgroundColor:colorValue.white,
        padding:10,
    }

});


const list = [
    {
        title: 'Available for Donate',
        icon: 'calendar',
        iconName: AntDesign
    },
    {
        title: 'Invite a friend',
        icon: 'mail',
        iconName: AntDesign

    },
    {
        title: 'Get help',
        icon: 'live-help',
        iconName: MaterialIcons
    },
    {
        title: 'Sign Out',
        icon: 'logout',
        iconName: AntDesign
    },

]