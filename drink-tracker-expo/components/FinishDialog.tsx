import React from 'react';
import { ModalProps, NavigationProps, Screens } from '../commonTypes';
import { Text } from 'react-native-ui-lib';
import { Button, Dialog } from 'react-native-ui-lib';

export const FinishModal = (
    props: ModalProps & { finishSession: () => void }
): React.ReactElement => {
    const pressYes = () => {
        closeModal();
        props.finishSession();
    };

    const closeModal = () => {
        props.setOpen(false);
    };

    return (
        <Dialog
            animationType="slide"
            visible={props.open}
            open={props.open}
            onDismiss={closeModal}
            height={'100%'}
            containerStyle={{
                backgroundColor: '#000',
                padding: 20,
                borderRadius: 8,
                height: '100%',
            }}
            overlayBackgroundColor="rgba(0,0,0,.2)"
        >
            <Text>
                Are you done with drinking for the night? This will complete the
                drinking session.
            </Text>
            <Button onPress={pressYes} label="Yes" />
            <Button onPress={closeModal} label="No" />
        </Dialog>
    );
};
