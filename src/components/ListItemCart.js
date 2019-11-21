import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { ButtonMinus, ButtonPlus, TextQty } from './index'
import { Context, Consumer } from '../context/Context';

export default class ListItemCart extends Component {

    render() {
        return(
            <View
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    backgroundColor: 'white',
                    elevation: 3,
                    marginBottom: 5
                }}>
                <View
                    style={{
                        width: "60%",
                        justifyContent: 'center'
                    }}>
                    <Text>{this.props.title}</Text>
                </View>
                <View
                    style={{
                        width: "40%"
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'red',
                            borderRadius: 20,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <TextQty qty={this.props.qty}/>
                    </View>
                </View>
            </View>
        )
    }
}

ListItemCart.propTypes = {
    title: PropTypes.string,
    qty: PropTypes.number
};