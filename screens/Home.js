import React, {Component} from "react";
import {
    View,
    ImageBackground,
    Text,
    SafeAreaView,
    // TouchableOpacity,
    // Modal,
    Button
} from 'react-native';
import styles from '../components/love/styles';

const Home = ({navigation}) => {
    // const [modalVisible, setModalVisible] = React.useState(false);

    const images_ = [
        require('../assets/images/fighter1.png'),
        require('../assets/images/fighter2.png'),
        require('../assets/images/fighter3.png'),
        require('../assets/images/fighter4.png'),
    ];

    const logo_ = [
        {
            id: 0,
            src: '../assets/images/fighter1.png'
        },
        {
            id: 1,
            src: '../assets/images/fighter2.png'
        },
        {
            id: 2,
            src: '../assets/images/fighter3.png'
        },
        {
            id: 3,
            src: '../assets/images/fighter4.png'
        }
    ];
    
    const texts_ = [
        "Model Syrion",
        "Model Pomme",
        "Model Daemon",
        "Model Alexander"
    ];
    
    const num =  Math.floor(Math.random()*4);
    
    const [vehicle,setVehicle] = React.useState(logo_);

    const [index,setIndex] = React.useState(num)

    return (
        <SafeAreaView 
            style={{flex:1,backgroundColor:'black'}}
        >
            <View style={{backgroundColor: "black",
                        paddingTop: 100,}}
                >
                <ImageBackground 
                source={images_[num]}
                style={
                    {
                        width: '100%',
                        height: '68%',
                        alignSelf:'center',
                        marginLeft: 10,
                        resizeMode: 'cover',
                    }
                }
                />
                <View>
                    <Text 
                        style={
                            {
                                fontSize: 15,
                                alignSelf: 'center',
                                fontWeight: '700',
                                color: 'white'
                            }
                        }
                    >
                        {texts_[num]}
                    </Text>
                    <Text 
                        style={
                            {
                                fontSize: 14,
                                alignSelf: 'center',
                                fontWeight: '500',
                                color: 'white'
                            }
                        }
                    >
                        Fly into another galaxy
                    </Text>
                </View>
            </View>
            <View style={styles.container_}>
                {/* <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <TouchableOpacity
                        onPress={()=>{
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </Modal> */}
                <Button
                    style={
                        {
                            fontWeight:"700"
                        }
                    }
                    // onPress={() => {
                    //     setModalVisible(true);
                    // }}
                    color="red"
                    title="Get in and Fight"
                >
                    <Text style={{fontSize:20,fontWeight:'bold',color:"yellow"}}>
                        Get in and fight
                    </Text>
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default Home;
