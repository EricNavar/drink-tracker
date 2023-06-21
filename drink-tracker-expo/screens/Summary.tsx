import React from 'react';
import { Drink, DrinkingSession, NavigationProps } from '../commonTypes';
import { DrinkItem } from '../components/DrinkItem';
import { ScrollView } from 'react-native';
import { Divider, InnerLayout, Row, StyledLayout } from '../styling/commonStyles';
import { getTimeRangeString } from '../util';
import { Text } from 'react-native-ui-lib';
import { EditDrinkModal } from '../components/EditDrinkModal';
import { BackButton } from '../components/BackButton';
import { FlatList } from 'react-native-gesture-handler';
import { getSession } from '../api';

type SummaryProps = {
    route: {
        params: {
            sessionId: string;
        };
    };
};

const Summary = (props: SummaryProps & NavigationProps) => {
    const [session, setSession] = React.useState<DrinkingSession | null>();
    const [editDrinkModalOpen, setEditDrinkModalOpen] = React.useState(false);
    const [selectedDrinkIndex, setSelectedDrinkIndex] = React.useState(-1);

    React.useEffect(() => {
        console.log('useEffect()');
        const fetchSession = async () => {
            const newSession = await getSession(props.route.params.sessionId);
            setSession(newSession);
        };
        fetchSession();
    });

    const getExpectedDrinksCount = () => {
        return 8; //TODO
    };

    const getMessage = () => {
        if (!session || !session.drinks) {
            return '';
        }
        const expectedDrinksCount = getExpectedDrinksCount();
        if (expectedDrinksCount === session.drinks.length) {
            return 'right on schedule';
        }
        const difference = session.drinks.length - expectedDrinksCount;
        if (difference > 0) {
            return `${difference} more drink${difference > 1 ? 's' : ''
                } than expected.`;
        }
        return `${-difference} less drink${difference < -1 ? 's' : ''
            } than expected.`;
    };

    const onPressBack = () => {
        props.navigation.goBack();
    };

    const openEditModal = (index: number) => {
        if (session) {
            setSelectedDrinkIndex(index);
            setEditDrinkModalOpen(true);
        }
    };

    const getSelectedDrink = () => {
        if (!session || selectedDrinkIndex == -1) {
            return null;
        }
        return session.drinks[selectedDrinkIndex];
    };

    const selectedDrink = getSelectedDrink();

    const onDelete = () => {};

    return (
        <StyledLayout>
            <Row>
                <BackButton onPress={onPressBack} />
            </Row>
            <InnerLayout>

                <ScrollView>
                    {session ? (
                        <>
                            <Text text50 style={{ marginBottom: 12 }}>
                                {session.title}
                            </Text>
                            <Text>
                                {getTimeRangeString(
                                    session.timeStart,
                                    session.timeEnd
                                )}
                            </Text>
                            <Text style={{ marginBottom: 12 }}>
                                You had {session.drinks.length} drinks,{' '}
                                {getMessage()}
                            </Text>
                            <FlatList
                                data={session.drinks}
                                renderItem={({ item, index }) => (
                                    <DrinkItem
                                        drink={item}
                                        openModal={openEditModal}
                                        onDelete={onDelete}
                                        index={index}
                                    />
                                )}
                                keyExtractor={(item) => item._id}
                                ItemSeparatorComponent={Divider}
                            />
                        </>
                    ) : (
                        <Text>Could not load session</Text>
                    )}
                    {selectedDrink && (
                        <EditDrinkModal
                            open={editDrinkModalOpen}
                            setOpen={setEditDrinkModalOpen}
                            drink={selectedDrink}
                            sessionId={session ? session._id : ''}
                        />
                    )}
                </ScrollView>
            </InnerLayout>
        </StyledLayout>
    );
};

export { Summary };
