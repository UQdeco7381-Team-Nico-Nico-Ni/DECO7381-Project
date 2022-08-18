import React from "react";
import { View, Text, StyleSheet,Image } from 'react-native';

import Colors from "../constants/Colors";
import TitleText from "./TitleText";

const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText>{props.title}</TitleText>
            {/* <Image source={require('../assets/banner.png')} style={styles.header} resizeMode="cover" /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Header;