import React, { Component } from 'react';
import {
    FlatList
} from 'react-native';
import { ContextType } from '../context/Context'
import { ListItem } from './index'

export default class FlatListAdapter extends Component {

    static contextType = ContextType

    render() {
        return(
            <FlatList
                data={this.context.todos}
                extraData={this.context.todos}
                keyExtractor={(x, y) => y.toString()}
                renderItem={({item, index}) =>
                    <ListItem
                        title={item.title}
                        index={index}
                        qty={!item.qty ? 0 : item.qty}
                    />
                }
            />
        )
    }

}