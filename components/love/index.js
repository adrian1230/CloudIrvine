import React from 'react';
import styles from './styles';
import {View,Text,Pressable} from 'react-native';

const Love = (props) => {
    return(
        <View style={styles.container_}>
            <Pressable
            style={styles.button_}
                onPress={()=>{
                    console.log("yo");
                }}
            >
                <Text style={{fontWeight:'bold',color:"lightgreen"}}>Get in and fight</Text>
            </Pressable>
        </View>
    );
};

export default Love;