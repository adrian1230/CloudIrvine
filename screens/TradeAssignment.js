import React, {useState} from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    SafeAreaView,
    Modal,
    TouchableOpacity
} from "react-native";

const OrderTrade = () => {
    const [modalVisible, setModalVisible] = useState(false);

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

    const Item_4 = () => (
        <View 
            style={
                {
                    padding: 15,
                    marginHorizontal: 50,
                    marginVertical: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                }
            }
        >
            {
                selection_.map(
                    (val,ind) =>
                        <View key={ind}>
                            {
                                val.pilots.map(
                                    (p,in_d) =>
                                        <View key={in_d}>
                                            <Text>{p}</Text>
                                        </View>
                                )
                            }
                        </View>
                )
            }
        </View>
    );

    const Item_3 = ({pilots}) => (
        <View>
            {
                pilots.map(
                    (p,ind)=>
                        <View key={ind}>
                            <Text>{p}</Text>
                        </View>
                )
            }
        </View>
    );

    const renderItem3 = ({item}) => (
        <Item_3 pilots={item.pilots} />
    );

    const Item_1 = ({title,img}) => (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View
                    style={
                        {
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 90
                        }
                    }
                >
                    <View
                        style={
                            {
                                marginTop: 20,
                                backgroundColor: 'floralwhite',
                                borderRadius: 20,
                                alignItems: 'center',
                                shadowColor: 'black',
                                shadowOffset: {
                                    width: 0,
                                    height: 2
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.9,
                                elevation: 5
                            }
                        }
                    >
                        <Item_4 />
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                            style={{
                                marginBottom: 20
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: '700',
                                    fontSize: 50,
                                    color: 'pink'
                                }}
                            >
                                Okay!
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={()=>{
                    setModalVisible(true);
                }}
            >
                <View 
                    style={
                        {
                            flexDirection: 'row',
                            borderRadius: 20,
                            borderWidth: 2,
                            backgroundColor: 'floralwhite',
                            borderColor: 'lightgray',
                            marginBottom: 25,
                            padding: 5,
                            justifyContent: 'space-between'
                        }
                    }
                >
                    <Text style={styles.title_}>{title}</Text>
                    <Image style={styles.image_} source={img}/>
                </View>
            </TouchableOpacity>
        </View>
    );

    const renderItem1 = ({item}) => (
        <Item_1 title={item.title} img={item.img} />
    );

    return (
        <SafeAreaView>
            <View style={styles.container_102}>
                <View style={{marginBottom:10}}>
                    <Text style={{
                        textAlign:"center",
                        fontStyle:'italic',
                        fontWeight:'700',
                        color:'red',
                        fontSize:30}}
                    >
                        Trade
                    </Text>
                    <Text 
                        style={
                            {
                                color:'black',
                                fontSize:15,
                                fontWeight:'600',
                                textAlign:'center'
                            }
                        }
                    >
                        Order your next flight here
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
                            marginHorizontal: 23,
                        }
                    }
                >
                    <FlatList
                        data={selection_}
                        renderItem={renderItem1}
                        keyExtractor={item=>item.title} 
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container_102: {
        marginTop: 20
    },
    image_: {
        width: 75,
        height: 75,
        marginRight: 15
    },
    title_: {
        fontSize: 30,
        fontWeight: '600',
        marginTop: 15,
        marginLeft: 15,
        color: 'crimson'
    },
})

export default OrderTrade;