import React, { Component } from 'react';
import {
    Text
} from 'react-native';

export default class TextQty extends Component {

    render() {
        return(
            <Text
                style={{
                    width: "40%",
                    textAlign: 'center',
                    alignSelf: 'center',
                    color: 'white'
                }}>
                {this.props.qty}
            </Text>
        )
    }
}