import React from 'react';
import { StatusBar } from 'react-native';

const MyStatusBar = () => {
    return (
        <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle="dark-content"
            showHideTransition="none"
            hidden={false}
        />
    );
};

export { MyStatusBar as StatusBar };
