import React from 'react';
import { NavigationProps, Screens } from '../commonTypes';
import {
    Divider,
    InnerLayout,
    Row,
    StyledLayout,
} from '../styling/commonStyles';
import { ListItem, Text, View, Button, Assets } from 'react-native-ui-lib';
import { FlatList } from 'react-native-gesture-handler';
import { BackButton } from '../components/BackButton';

const Settings = (props: NavigationProps) => {
    const redirect = (page: string) => {
        props.navigation.navigate(page);
    };

    const data = [
        {
            buttonTitle: 'About',
            screenTitle: Screens.About,
        },
        // {
        //     buttonTitle: 'Feedback',
        //     screenTitle: Screens.Feedback
        // },
        {
            buttonTitle: 'Privacy Policy',
            screenTitle: Screens.PrivacyPolicy,
        },
        {
            buttonTitle: 'Debug',
            screenTitle: Screens.Debug,
        },
    ];

    return (
        <StyledLayout>
            <Row>
                <BackButton onPress={() => props.navigation.goBack()} />
            </Row>
            <InnerLayout>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.screenTitle}
                    style={{
                        backgroundColor: '#333',
                        borderRadius: 6,
                        height: data.length * 51 - 1,
                        flexGrow: 0,
                    }}
                    renderItem={({ item }) => (
                        <ListItem
                            onPress={() => redirect(item.screenTitle)}
                            style={{ height: 50, paddingLeft: 8 }}
                        >
                            <View centerV>
                                <Text>{item.buttonTitle}</Text>
                            </View>
                        </ListItem>
                    )}
                    ItemSeparatorComponent={Divider}
                />
            </InnerLayout>
        </StyledLayout>
    );
};

export { Settings };
