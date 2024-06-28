/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Contacts} from './src/screens/contacts/Contacts';
import {ContactListProvider} from './src/context/ContactContext';
import {Colors} from './src/utils/colors';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Colors.backgroundBlack} />
      <ContactListProvider>
        <Contacts />
      </ContactListProvider>
    </SafeAreaView>
  );
}

export default App;
