import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Home,ParkingLot,OrderTrade,Ranking} from '../screens/index';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';
import {COLORS_,icons} from '../consts/index';

Icon.loadFont();

const Tab = createBottomTabNavigator();

const TabBarButt = ({accessibilityState,children,onPress}) => {
    var isIndex = accessibilityState.selected;

    if (isIndex) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS_.white }}></View>
                    <View style={{ flex: 1, backgroundColor: COLORS_.white }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -15.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: 15,
                        backgroundColor: COLORS_.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 30,
                    backgroundColor: COLORS_.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const CustTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 10,
                        backgroundColor: COLORS_.white
                    }}
                ></View>
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    } else {
        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
            tabBar={(props) => (
                <CustTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.home_}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ?  "red" : "black"
                            }}
                        />
                        // <Icon
                        //     name="bell"
                        //     size={30}
                        //     color="red"
                        // />
                    ),
                    tabBarButton: (props) => (
                        <TabBarButt
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Parking"
                component={ParkingLot}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.map_}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ?  "red" : "black"
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarButt
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Order"
                component={OrderTrade}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.sign_}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ?  "red" : "black"
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarButt
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="User"
                component={Ranking}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user_}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ?  "red" : "black"
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarButt
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs
