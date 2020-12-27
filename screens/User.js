import React from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
} from "react-native";

const User = () => {
    return (
        <SafeAreaView>
            <View style={styles.body}>
                <Text style={styles.text_h1}>Profile</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "black"
    },
    text_h1: {
        color: "white"
    },
});

export default User;