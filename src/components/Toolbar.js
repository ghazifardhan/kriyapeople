import React, { Component } from 'react';
import {
    View, 
    Text
} from 'react-native'
import { HeaderRightText } from '../components'

export default class Toolbar extends Component {

    render() {
        return(
            <View
                style={{
                    width: '100%',
                    height: 55,
                    backgroundColor: 'blue',
                    shadowColor: 'grey',
                    shadowOpacity: 0.8,
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowRadius: 5,
                    elevation: 3
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                    }}>
                        <View
                            style={{
                                width: "70%",
                                flex: 1,
                                paddingLeft: 20,
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontSize: 20
                                }}>
                                Home
                            </Text>
                        </View>
                        <View
                            style={{
                                width: "30%",
                                flex: 1,
                                paddingLeft: 20,
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            }}>
                            <HeaderRightText/>
                        </View>
                </View>
            </View>
        )
    }
}