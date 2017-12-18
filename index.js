//import a librabry

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a component

const App = () =>{

    return(
        <Header headerText = {'Albums'}/>
    );
};

//render to the phone
AppRegistry.registerComponent('albums', () => App);