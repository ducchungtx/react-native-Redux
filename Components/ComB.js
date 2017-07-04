import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ComC from './ComC';

export default class ComB extends Component {
    state = {  }
    clickB(){
        this.refs.mrC.doiMauC();
    }
    render() {
        return (
            <View style={{ width: 150, height: 150, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                <ComC ref="mrC" />
            </View>
        );
    }
}