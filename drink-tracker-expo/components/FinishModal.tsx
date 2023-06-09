import React from 'react';
import { ModalProps, NavigationProps, Screens } from '../commonTypes';
import { Text } from 'react-native-ui-lib';
import { Button, Dialog } from 'react-native-ui-lib';
import { modalStyles } from '../styling/commonStyles';
import { View } from 'react-native';

//Todo: allow this to be a native iOS alert
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
            onDismiss={closeModal}
            height={140}
            overlayBackgroundColor="rgba(0,0,0,.2)"
            containerStyle={modalStyles.container}
        >
            <Text>
                Are you done with drinking for the night? This will complete the
                drinking session.
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 12,
                }}
            >
                <Button onPress={pressYes} label="Yes" />
                <Button onPress={closeModal} label="No" />
            </View>
        </Dialog>
    );
};
