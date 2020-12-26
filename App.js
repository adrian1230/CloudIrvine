/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
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

export default App;
