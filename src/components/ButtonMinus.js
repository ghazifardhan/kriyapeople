import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native'
import { ContextType } from '../context/Context'

export default class ButtonMinus extends Component {
    static contextType = ContextType;

    render() {
        return(
            <TouchableOpacity
                style={{
                    width: "30%",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => this.context.decreaseNumber(this.props.index) }>
                <Text
                    style={{
                        fontSize: 20,
                        color: 'white'
                    }}>
                    -
                </Text>    
            </TouchableOpacity>
        )
    }

}
