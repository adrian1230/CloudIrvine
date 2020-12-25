import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    imageBack: {
        width: '100%',
        height: '80%',
        alignSelf:'center',
        marginLeft: 0,
        marginTop: 25,
        resizeMode: 'cover',
    },
    sectionContainer: {
        backgroundColor: "black",
    },
    sectionTitle: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '700',
        color: 'white'
    },
    sectionSubTitle: {
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: '500',
        color: 'white'
    },
});

export default styles;