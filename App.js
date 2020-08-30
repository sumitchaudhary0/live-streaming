import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
  Button
} from 'react-native';

import Stream from './src/Stream';
import Player from './src/Player';


class App extends React.Component {

  render() {
    return (
      <>
        <View >
          <Player />
          <Stream />
        </View>

      </>
    );
  }
}


export default App;
