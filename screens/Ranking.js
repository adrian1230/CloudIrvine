import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const Ranking = () => {
    const texts_ = [
        {"title":"Model Syrion"},
        {"title":"Model Pomme"},
        {"title":"Model Daemon"},
        {"title":"Model Alexander"}
    ];
    
    var d = [];

    while (d.length < 4) {
        var dd = Math.floor(Math.random()*4);
        if (d.includes(dd)===false) {
            d.push(dd);
        } 
    }

    var ttt = [];

    while (ttt.length < 4) {
        for (var i =0; i < d.length;i++) {
            ttt.push(texts_[d[i]])
        }
    }

    return (
        <SafeAreaView style={styles.body}>
            <Text style={styles.text_h1}>Ranking</Text>
            <View style={{borderWidth:0.5,borderColor:'white',margin:10}}></View>
            <View style={styles.container_101}>
                {
                    ttt.map(
                        (p) =>
                            <View 
                                style={
                                    {
                                        marginHorizontal:15,
                                        alignSelf: 'center'
                                    }
                                }
                            >
                                <Text style={{color:'red'}}>{p.title}</Text>
                            </View>
                    )
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "black"
    },
    container_101: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black'
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