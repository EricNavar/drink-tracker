import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, List, ListItem } from '@ui-kitten/components';
import { Drink } from '../commonTypes';

interface IListItem {
    title: string;
    description: string;
}

export const DrinkList = (props: { drinks: Drink[] }): React.ReactElement => {
    const renderItem = ({
        item,
        index,
    }: {
        item: IListItem;
        index: number;
    }): React.ReactElement => (
        <ListItem
            activeOpacity={1}
            title={`${item.title} ${index + 1}`}
            description={`${item.description} ${index + 1}`}
        />
    );

    const data = props.drinks.map((drink) => {
        return {
            title: drink.drinkName,
            description: drink.timeDrank.toTimeString(),
        };
    });

    return (
        <List
            style={styles.container}
            data={data}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        maxHeight: 200,
    },
});
