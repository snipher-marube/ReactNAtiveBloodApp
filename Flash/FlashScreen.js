import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, ImageBackground } from 'react-native';

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
    return (
            <FadeInView style={{width:'100%', height:'100%', backgroundColor:'powderblue'}}>
                <ImageBackground style={{height:'100%', width:'100%'}}
                                 resizeMode='stretch' source={require('../assests/images/SpleshScreen.jpg')}>
                    <Text>Loading</Text>
                </ImageBackground>
            </FadeInView>

    )
}