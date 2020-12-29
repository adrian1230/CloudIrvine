import React from "react";
import {
    View,
    Image,
    Text
} from "react-native";
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';

import {icons,SIZES_} from "../consts/index";

class ParkingLot extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 0,
                        right: 0,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: SIZES_.width * 0.9,
                            paddingVertical: SIZES_.padding,
                            paddingHorizontal: SIZES_.padding * 2,
                            borderRadius: SIZES_.radius,
                            backgroundColor: 'white'
                        }}
                    >
                        <Image
                            source={icons.map_}
                            style={{
                                width: 30,
                                height: 30,
                                marginRight: SIZES_.padding
                            }}
                        />

                        <View style={{ flex: 1 }}>
                            <Text>ABC Street</Text>
                        </View>

                        <Text>{Math.ceil(11.8)} mins</Text>
                    </View>
                </View>
                <MapView 
                    style={{ 
                        flex: 1,
                        minHeight:615,
                    }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    initialRegion={{
                        latitude: 59.531,
                        longitude: 11.1112,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.07
                    }}
                >
                </MapView>
            </View>
        )
    }
}

export default ParkingLot;