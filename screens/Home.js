import React, {Component} from "react";
import {View,Text,SafeAreaView,TouchableOpacity} from 'react-native';
import FighterItem from '../components/fighterItems/index';
import styles from '../components/love/styles';

const Home = () => {
    return (
        <SafeAreaView 
            style={{flex:1,backgroundColor:'black'}}
        >
            <FighterItem />
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
