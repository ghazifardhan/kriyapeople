import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { ButtonMinus, ButtonPlus, TextQty } from './index'

export default class ListItem extends Component {

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
                            height: 30
                        }}>
                        <ButtonMinus index={this.props.index} />
                        <TextQty qty={this.props.qty}/>
                        <ButtonPlus index={this.props.index} />
                    </View>
                </View>
            </View>
        )
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    qty: PropTypes.number,
    onDecrease: PropTypes.func,
    onIncrease: PropTypes.func,
};