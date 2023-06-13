import React from 'react';
import { ModalProps, NavigationProps, Screens } from '../commonTypes';
import { Text } from 'react-native-ui-lib';
import { Button, Dialog } from 'react-native-ui-lib';

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
        <Dialog visible={visible} overlayBackgroundColor="#000">
            <Text>
                Are you done with drinking for the night? This will complete the
                drinking session.
            </Text>
            <Button onPress={pressYes}>Yes</Button>
            <Button onPress={pressNo}>No</Button>
        </Dialog>
    );
};
