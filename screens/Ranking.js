import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const LD = () => {
    return (
        <View style={{width:11,paddingVertical:15}}>
            <View style={{flex:2,borderRightColor:'white',borderRightWidth:10}}></View>
        </View>
    )
}

const Ranking = () => {
    return (
        <SafeAreaView style={styles.body}>
            <Text style={styles.text_h1}>Ranking</Text>
            <View style={{borderWidth:0.5,borderColor:'white',margin:10}}></View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "black"
    },
    text_h1: {
        color: "white",
        textAlign: 'center',
        marginTop: 20,
        fontSize: 25,
        fontWeight: '700'
    },
});

export default Ranking;