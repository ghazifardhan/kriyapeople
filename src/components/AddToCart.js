import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { ContextType } from '../context/Context';

export default class AddToCart extends Component {
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
                    this.context.setSelectedTodos()
                    this.props.navigation.navigate("Cart")
                }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20
                    }}>
                    Add to Cart
                </Text>
            </TouchableOpacity>
        )
    }

}