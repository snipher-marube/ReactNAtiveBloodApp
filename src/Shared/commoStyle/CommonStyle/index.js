import {StyleSheet} from "react-native";
import fontValue from "../FontValue";

export const commonStyle = (obj) => {
    const {fontSize=14,
        fontFamily=fontValue.PoppinsRegular,
        backgroundColor='#FF2156',
        color='#7E7E7E'} = obj
    const styles = StyleSheet.create({
        text: {
            fontSize: fontSize,
            fontFamily: fontFamily,
        },
        color: {
            color: color
        },
        background: {
            backgroundColor: backgroundColor,
        },
    })

    return styles

};

export const commonJustify = StyleSheet.create({
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    rowFlexEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    rowFlexStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    rowSpaceAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowSpaceEvenly: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
/***
 cardStyle: {
        backgroundColor: ColorValue.whitesmoke,
        borderRadius: 5,
        margin: 10,
        padding: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: ColorValue.lightColor1,
        elevation: 1
    },
***/
 center: {
        justifyContent: 'center'
    },
 textCenter: {
        textAlign: 'center',
    }
})

