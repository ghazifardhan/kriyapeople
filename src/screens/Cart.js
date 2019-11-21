import React, { Component } from 'react';
import {
    View,
    Text,
    ToolbarAndroid
} from 'react-native';
import { Consumer } from '../context/Context';
import { HeaderRightText, FlatListCartAdapter, Checkout } from '../components';

export default class Cart extends Component {

    static navigationOptions = {
        title: "Cart",
        headerRight: () => (
            <HeaderRightText/>
        )
    }
    constructor(props) {
        super(props)    
    }

    render() {
        return(
            <View
                style={{
                    flex: 1
                }}>
                <FlatListCartAdapter/>
                <Checkout navigation={this.props.navigation}/>
            </View>
        )
    }

}