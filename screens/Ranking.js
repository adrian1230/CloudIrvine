import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";

const Ranking = () => {
    const texts_ = [
        {"title":"Model Syrion","img":require('../assets/images/fighter1.png')},
        {"title":"Model Pomme","img":require('../assets/images/fighter2.png')},
        {"title":"Model Daemon","img":require('../assets/images/fighter3.png')},
        {"title":"Model Alexander","img":require('../assets/images/fighter4.png')}
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
                        (p,ind) =>
                            <View 
                                style={
                                    {
                                        alignSelf: 'center',
                                        paddingVertical: 25,
                                        flexDirection: 'row',
                                    }
                                }
                            >
                                <View style={{width:50}}></View>
                                <Text style={
                                        {
                                            color:'red',
                                            fontSize: 30,
                                            alignSelf: 'flex-start'
                                        }
                                    }
                                >
                                    {ind+1}
                                </Text>
                                <View style={{width:120}}></View>
                                <Text 
                                    style={
                                        {
                                            color:'red',
                                            fontSize: 30,
                                            alignSelf: 'flex-end',
                                            width: 125
                                        }
                                    }
                                >
                                    {p.title}
                                </Text>
                                <View style={{width:15}}></View>
                                <View style={
                                        {
                                            width:'38%'
                                        }
                                    }
                                >
                                    <Image source={p.img} 
                                        style={
                                            {
                                                width:75,
                                                height:75
                                            }
                                        } 
                                    />
                                </View>
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