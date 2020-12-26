import {Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');

export const COLORS_ = {
    primary: 'whitesmoke',
    secondary: 'gray',
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#F6F6F7",
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES_ = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS_ = {
    largeTitle: { fontFamily: "Oswald-Bold", fontSize: SIZES_.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Oswald-ExtraLight", fontSize: SIZES_.h1, lineHeight: 36 },
    h2: { fontFamily: "Oswald-Light", fontSize: SIZES_.h2, lineHeight: 30 },
    h3: { fontFamily: "Oswald-Medium", fontSize: SIZES_.h3, lineHeight: 22 },
    h4: { fontFamily: "Oswald-Regular", fontSize: SIZES_.h4, lineHeight: 22 },
    body1: { fontFamily: "Oswald-SemiBold", fontSize: SIZES_.body1, lineHeight: 36 },
    body2: { fontFamily: "Oswald-SemiBold", fontSize: SIZES_.body2, lineHeight: 30 },
    body3: { fontFamily: "Oswald-SemiBold", fontSize: SIZES_.body3, lineHeight: 22 },
    body4: { fontFamily: "Oswald-SemiBold", fontSize: SIZES_.body4, lineHeight: 22 },
    body5: { fontFamily: "Oswald-SemiBold", fontSize: SIZES_.body5, lineHeight: 22 },
};

const appTheme = { COLORS_, SIZES_, FONTS_ };

export default appTheme;