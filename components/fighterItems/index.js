import React from 'react';
import styles from './styles';
import {View,Text,ImageBackground} from 'react-native';

const images_ = [
  require('../../assets/images/fighter1.png'),
  require('../../assets/images/fighter2.png'),
  require('../../assets/images/fighter3.png'),
  require('../../assets/images/fighter4.png')
];

const texts_ = [
  "Model Syrion",
  "Model Pomme",
  "Model Daemon",
  "Model Alexander"
];

const FighterItem = (props) => {
    return(
      <View style={styles.sectionContainer}>
          <ImageBackground 
            source={images_[1]}
            style={styles.imageBack}
          />
          <View>
            <Text style={styles.sectionTitle}>{texts_[1]}</Text>
            <Text style={styles.sectionSubTitle}>Fly into another galaxy</Text>
          </View>
      </View>
    );
};

export default FighterItem;