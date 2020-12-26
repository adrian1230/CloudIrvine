import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    imageBack: {
        width: '100%',
        height: '68%',
        alignSelf:'center',
        marginLeft: 10,
        resizeMode: 'cover',
    },
    sectionContainer: {
        backgroundColor: "black",
        paddingTop: 100,
    },
    sectionTitle: {
        fontSize: 15,
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