import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar
          animated={true}
          backgroundColor="#0fc7f0"
          showHideTransition={true}
        />
        <WebView source={{uri: 'https://youtubev4.netlify.app/'}} />
      </>
    );
  }
}

export default App;
