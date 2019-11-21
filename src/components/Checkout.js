import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { ContextType } from '../context/Context';

export default class Checkout extends Component {
    static contextType = ContextType;

    render() {
        return(
            <TouchableOpacity
                style={{
                    backgroundColor: 'blue',
                    height: 50,
                    width: "100%",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => {
                    this.context.clearAll()
                    this.props.navigation.goBack()
                }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20
                    }}>
                    Checkout
                </Text>
            </TouchableOpacity>
        )
    }

}