import React from 'react';
import { Button } from 'react-native';
import { NavigationProps, Screens } from '../commonTypes';
import { Divider, Row, StyledLayout } from '../styling/commonStyles';
import { ListItem, Text, View } from 'react-native-ui-lib';
import { FlatList } from 'react-native-gesture-handler';

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
    ];

    return (
        <StyledLayout>
            <Row>
                <Button title="Back" onPress={() => redirect(Screens.Home)} />
            </Row>
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
        </StyledLayout>
    );
};

export { Settings };
