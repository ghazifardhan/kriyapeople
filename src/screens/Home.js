import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { HeaderRightText, FlatListAdapter, AddToCart } from '../components'

export default class Home extends Component {

    static navigationOptions = {
        title: "Home",
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
                <FlatListAdapter/>
                <AddToCart navigation={this.props.navigation}/>
            </View>
        )
    }

}