import React, { Component } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import HomeScreen from './app/HomeScreen.js';

export default class App extends Component {
  constructor(state, props){
    super(state);
    this.state={
      
    }
  }
  render(){
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <HomeScreen ref="homeScreen"/>
      </ApplicationProvider>
    );
  }
};

