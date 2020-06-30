import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    head: {
        flex: 0,
        // marginTop: Constants.statusBarHeight,
    }
});

const Header = () => {
    return (
        <View style={styles.head}>
            <Text>My Head</Text>
        </View>
    );
}

export default Header;