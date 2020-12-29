import React from "react";
import {
    View,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {icons,gakey} from "../consts/index";

class ParkingLot extends React.Component {
    render() {
        return (
            <View>
                <MapView 
                    style={{ flex: 1,minHeight:615 }}
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