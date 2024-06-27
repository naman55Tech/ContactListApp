/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {Contacts} from './src/screens/contacts/Contacts';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Contacts />
    </SafeAreaView>
  );
}

export default App;
