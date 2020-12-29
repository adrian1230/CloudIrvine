import React from 'react';
import styles from './styles';
import {View,Text,ImageBackground} from 'react-native';

const FighterItem = () => {
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
  
  const car = images_[num];
  
  const num =  Math.floor(Math.random()*4);
  
  const [vehicle,setVehicle] = React.useState(car);

  return(
    <View style={styles.sectionContainer}>
        <ImageBackground 
          source={images_[num]}
          style={styles.imageBack}
        />
        <View>
          <Text style={styles.sectionTitle}>{texts_[num]}</Text>
          <Text style={styles.sectionSubTitle}>Fly into another galaxy</Text>
        </View>
    </View>
  );
};

export default FighterItem;