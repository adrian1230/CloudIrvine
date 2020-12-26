import React from 'react';
import styles from './styles';
import {View,Text,Pressable, TouchableOpacity} from 'react-native';

const Love = ({navigation}) => {
    return(
        <View style={styles.container_}>
            {/* <Pressable
                style={styles.button_}
            >
                <Text style={{fontSize:20,fontWeight:'bold',color:"yellow"}}>Get in and fight</Text>
            </Pressable> */}
            <TouchableOpacity
                style={styles.button_}
                onPress={()=> navigation.navigate('Home')}
            >
                <Text style={{fontSize:20,fontWeight:'bold',color:"yellow"}}>
                    Get in and fight
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Love;