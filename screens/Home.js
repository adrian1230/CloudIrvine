import React, {Component} from "react";
import {
    View,
    ImageBackground,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import styles from '../components/love/styles';

const Home = ({navigation}) => {
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
                <TouchableOpacity
                    style={styles.button_}
                >
                    <Text style={{fontSize:20,fontWeight:'bold',color:"yellow"}}>
                        Get in and fight
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home;
