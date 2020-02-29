import React, { Component } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import HomeScreen from './app/HomeScreen.js'

export default class App extends Component {
  render(){
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <HomeScreen />
      </ApplicationProvider>
    );
  }
  onActionSelected= (position)=>{
    if (position === 0) { // index of 'Settings'
      showSettings();
    }
  }
};

// const styles = StyleSheet.create({
  
// });
