import React, {useRef,useState,useEffect} from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {COLORS_,SIZES_,icons,FONTS_,gakey} from "../consts/index";

const ParkingLot = ({route}) => {
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

    const [index,setIndex] = React.useState(null)

    const mapView = useRef()

    const initLoca = {
        streetName: 'Kimberley Street',
        gps: {
            latitude: 6.17221,
            longitude: 92.1239812
        }
    }

    const locationData = [
        {
            id: 0,
            name: 'a',
            location: {
                latitude: 1.12321312335,
                longitude: 102.6123123417
            }
        },
        {
            id: 1,
            name: 'b',
            location: {
                latitude: 23.12321312335,
                longitude: 10.612417
            }
        },
        {
            id: 2,
            name: 'c',
            location: {
                latitude: 32.1312335,
                longitude: 61.23123417
            }
        },
        {
            id: 3,
            name: 'd',
            location: {
                latitude: 1.123,
                longitude: 98.61123417
            }
        },
    ];

    const [loca, setLoca] = useState(locationData)
    const [currentLocation, setCurrentLocation] = useState(initLoca)
    const [streetName, setStreetName] = useState("")
    const [fromLocation, setFromLocation] = useState(null)
    const [toLocation, setToLocation] = useState(null)
    const [region, setRegion] = useState(null)

    const [duration, setDuration] = useState(0)
    const [isReady, setIsReady] = useState(false)
    const [angle, setAngle] = useState(0)

    useEffect(() => {
        let { loca, currentLocation } = route.params;

        let fromLoc = currentLocation.gps
        let toLoc = rest.location
        let street = currentLocation.streetName

        let mapRegion = {
            latitude: (fromLoc.latitude + toLoc.latitude) / 2,
            longitude: (fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
            longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
        }

        setLoca(loca)
        setStreetName(street)
        setFromLocation(fromLoc)
        setToLocation(toLoc)
        setRegion(mapRegion)

    }, [])

    function calculateAngle(coordinates) {
        let startLat = coordinates[0]["latitude"]
        let startLng = coordinates[0]["longitude"]
        let endLat = coordinates[1]["latitude"]
        let endLng = coordinates[1]["longitude"]
        let dx = endLat - startLat
        let dy = endLng - startLng

        return Math.atan2(dy, dx) * 180 / Math.PI
    }

    function zoomIn() {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta / 2,
            longitudeDelta: region.longitudeDelta / 2
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    function zoomOut() {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta * 2,
            longitudeDelta: region.longitudeDelta * 2
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    function renderMap() {
        const destinationMarker = () => (
            <Marker
                coordinate={toLocation}
            >
                <View
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}
                >
                    <View
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'floralwhite'
                        }}
                    >
                        <Image
                            source={icons.map_}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: 'white'
                            }}
                        />
                    </View>
                </View>
            </Marker>
        )

        const carIcon = () => (
            <Marker
                coordinate={fromLocation}
                anchor={{ x: 0.5, y: 0.5 }}
                flat={true}
                rotation={angle}
            >
                <Image
                    source={icons.map_}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
            </Marker>
        )

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapView}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    style={{ flex: 1 }}
                >
                    <MapViewDirections
                        origin={fromLocation}
                        destination={toLocation}
                        apikey={gakey}
                        strokeWidth={5}
                        strokeColor="floralwhite"
                        optimizeWaypoints={true}
                        onReady={result => {
                            setDuration(result.duration)

                            if (!isReady) {
                                // Fit route into maps
                                mapView.current.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: (SIZES_.width / 20),
                                        bottom: (SIZES_.height / 4),
                                        left: (SIZES_.width / 20),
                                        top: (SIZES_.height / 8)
                                    }
                                })

                                // Reposition the car
                                let nextLoc = {
                                    latitude: result.coordinates[0]["latitude"],
                                    longitude: result.coordinates[0]["longitude"]
                                }

                                if (result.coordinates.length >= 2) {
                                    let angle = calculateAngle(result.coordinates)
                                    setAngle(angle)
                                }

                                setFromLocation(nextLoc)
                                setIsReady(true)
                            }
                        }}
                    />
                    {destinationMarker()}
                    {carIcon()}
                </MapView>
            </View>
        )
    }

    function renderDestinationHeader() {
        return (
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
                        <Text style={{ ...FONTS_.body3 }}>{streetName}</Text>
                    </View>

                    <Text style={{ ...FONTS_.body3 }}>{Math.ceil(duration)} mins</Text>
                </View>
            </View>
        )
    }

    function renderButtons() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: SIZES_.height * 0.35,
                    right: SIZES_.padding * 2,
                    width: 60,
                    height: 130,
                    justifyContent: 'space-between'
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS_.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomIn()}
                >
                    <Text style={{ ...FONTS_.body1 }}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS_.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomOut()}
                >
                    <Text style={{ ...FONTS_.body1 }}>-</Text>
                </TouchableOpacity>
            </View>

        )
    }

    return (
        <View style={{ flex: 1 }}>
            {renderMap()}
            {renderDestinationHeader()}
            {renderButtons()}
        </View>
    )
}

export default ParkingLot;