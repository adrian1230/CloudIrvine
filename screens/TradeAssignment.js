import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
} from "react-native";

const OrderTrade = () => {
    const selection_ = [
        {
            "title":"Model Syrion",
            "img":require('../assets/images/fighter1.png'),
            "pilots": ["Connor Doe","Bain Bain","Deak Jue","Daek D"]
        },
        {
            "title":"Model Pomme",
            "img":require('../assets/images/fighter2.png'),
            "pilots": ["Ensku 8"]
        },
        {
            "title":"Model Daemon",
            "img":require('../assets/images/fighter3.png'),
            "pilots": ["Plasima Fuku","Bob Coku"]
        },
        {
            "title":"Model Alexander",
            "img":require('../assets/images/fighter4.png'),
            "pilots": ["Perry Jo","Fiona Jo"]
        }
    ];

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container_102}>
                    <View>
                        <Text style={{
                            textAlign:"center",
                            fontStyle:'italic',
                            fontWeight:'700',
                            color:'red',
                            fontSize:30}}
                        >
                            Order
                        </Text>
                        <View style={{
                                width:"90%",
                                marginTop: 15,
                                margin: 20,
                                borderColor: 'grey',
                                borderWidth: 1.5
                            }}
                        ></View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container_102: {
        marginTop: 20
    }
})

export default OrderTrade;