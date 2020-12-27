import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
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

    const Item_1 = ({title}) => (
        <View>
            <Text>{title}</Text>
        </View>
    );

    const renderItem1 = ({item}) => (
        <Item_1 title={item.title} />
    );

    const Item_2 = ({img}) => (
        <View>
            <Image style={styles.image_} source={img}/>
        </View>
    );

    const renderItem2 = ({item}) => (
        <Item_2 img={item.img}/>
    );

    const Item_3 = ({selection_}) => (
        <View>
            {
                selection_.map(
                    (p)=>
                        <View>
                            <Text>{p.pilots}</Text>
                        </View>
                )
            }
        </View>
    );

    const renderItem3 = ({item}) => (
        <Item_3 selection_={item.pilots} />
    );

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container_102}>
                    <View style={{marginBottom:10}}>
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
                    <View 
                        style={
                            {
                                flexDirection: 'row',
                            }
                        }
                    >
                        <FlatList
                            data={selection_}
                            renderItem={renderItem1}
                            keyExtractor={item=>item.title} 
                        />
                        <FlatList
                            data={selection_}
                            renderItem={renderItem2}
                            keyExtractor={item=>item.img} 
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container_102: {
        marginTop: 20
    },
    image_: {
        width: 45,
        height: 45,
    }
})

export default OrderTrade;