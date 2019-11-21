import React, { Component } from 'react';
import {
    FlatList
} from 'react-native';
import { ContextType } from '../context/Context'
import { ListItemCart } from './index'

export default class FlatListCartAdapter extends Component {

    static contextType = ContextType

    render() {
        return(
            <FlatList
                data={this.context.selectedTodos}
                extraData={this.context.selectedTodos}
                keyExtractor={(x, y) => y.toString()}
                renderItem={({item, index}) =>
                    <ListItemCart
                        title={item.title}
                        qty={!item.qty ? 0 : item.qty}
                    />
                }
            />
        )
    }

}