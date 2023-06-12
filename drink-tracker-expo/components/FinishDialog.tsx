import React from 'react';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import { ModalProps, NavigationProps, Screens } from '../commonTypes';

export const FinishModal = (
    props: ModalProps & NavigationProps
): React.ReactElement => {
    const [visible, setVisible] = React.useState(false);

    const pressYes = () => {
        props.setOpen(false);
        props.navigation.navigate(Screens.Summary, {
            sessionId: '1',
        });
    };

    const pressNo = () => {
        setVisible(false);
    };

    return (
        <Modal visible={visible}>
            <Card disabled={true}>
                <Text>
                    Are you done with drinking for the night? This will complete
                    the drinking session.
                </Text>
                <Button onPress={pressYes}>Yes</Button>
                <Button onPress={pressNo}>No</Button>
            </Card>
        </Modal>
    );
};
