import React from 'react';
import styles from './styles';
import {View,Text,ImageBackground} from 'react-native';

const FighterItem = (props) => {
    return(
      <View style={styles.sectionContainer}>
          <ImageBackground 
            source={require('../../assets/images/fighter3.png')}
            style={styles.imageBack}
          />
          <View>
            <Text style={styles.sectionTitle}>Model Syrion</Text>
            <Text style={styles.sectionSubTitle}>Fly into another galaxy</Text>
          </View>
      </View>
    );
};

export default FighterItem;