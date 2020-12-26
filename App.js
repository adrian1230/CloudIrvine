/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import FighterItem from './components/fighterItems/index';
import Love from './components/love/index';

function App() {
  return (
    <>
      <View>
        <FighterItem />
        <Love />
      </View>
    </>
  );
}

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
