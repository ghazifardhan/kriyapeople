import React, { Component } from 'react';
import {
    Text,
} from 'react-native';
import { Consumer, ContextType } from '../context/Context'

export default class HeaderRightText extends Component {
    static contextType = ContextType;

    render() {
        return(
            <Text
                style={{
                    fontSize: 22,
                    marginRight: 20,
                    color: 'white'
                }}>
                {this.context.totalCart}
            </Text>
        )
    }
}