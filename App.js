/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground
} from 'react-native';
import FighterItem from './components/fighterItems/index';

function App() {
  return (
    <>
      <View>
        <View style={styles.body}>
          <FighterItem />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
